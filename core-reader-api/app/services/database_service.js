import pg_client from "../adapters/database/postgresql.js";

class DbService {
  constructor(model) {
    this.model = model;
  }

  //this method is used to add data to the table
  insertQuery = async (params) => {
    let query = [`insert into ${this.model.type} (`];
    let set = [];
    let values = [];
    const data = Object.values(params);
    const keys = Object.keys(params);
    keys.forEach((key, i) => {
      set.push(key);
      values.push(`$${i + 1}`);
    });
    query.push(set.join(", "));
    query.push(") values(");
    query.push(values.join(", "));
    query.push(") returning *");
    query = query.join(" ");
    const response = await pg_client.query(query, data);
    const data_response = {
      response: response && response.rows[0] ? response.rows[0] : {},
      status: response && response.rows[0] ? 201 : 400,
      message:
        response && response.rows[0]
          ? this.model.type + " create successfully"
          : this.model.type + " Bad request",
    };
    return data_response;
  };

  //this method is used to edit the data in the table
  updateByIdQuery = async (id, params) => {
    const data = Object.values(params);
    const keys = Object.keys(params);
    let set = [];
    let query = [`update ${this.model.type} set`];
    keys.forEach((k, i) => {
      set.push(`${k} = $${i + 1}`);
    });
    query.push(set.join(", "));
    query.push("where id = " + id + " returning *");
    query = query.join(" ");
    const response = await pg_client.query(query, data);
    const data_response = {
      response: response && response.rows[0] ? response.rows[0] : {},
      status: response && response.rows[0] ? 200 : 404,
      message:
        response && response.rows[0]
          ? this.model.type + " update successfully"
          : this.model.type + " Not Found",
    };
    return data_response;
  };

  //this method is used to delete the data in the table
  deleteByIdQuery = async (id) => {
    let query = `delete from ${this.model.type} where id=${id} returning *`;
    const response = await pg_client.query(query);
    const data = {
      response: response && response.rows[0] ? response.rows[0] : {},
      status: response && response.rows[0] ? 200 : 404,
      message:
        response && response.rows[0]
          ? this.model.type + " deleted successfully"
          : this.model.type + " Not Found",
    };
    return data;
  };

  // this method is used to find the data or datas in the table by value
  findByValueQuery = async (params) => {
    const data = Object.values(params);
    const keys = Object.keys(params);
    let query = [`select `];
    let set = [];
    let set2 = [];
    Object.keys(this.model.columns).forEach((key) => {
      set.push(key);
    });
    query.push(set.join(", "));
    query.push(` from ${this.model.type} where `);

    // select id, school_id, class_id,.. form log_temp where

    keys.forEach((k, i) => {
      set2.push(`${k} = $${i + 1}`);
    });
    query.push(set2.join(" and "));

    //select id, school_id, class_id,.. form log_temp where school_id = $1 and class_id = $2 and sensor_id = $3

    query = query.join(" ");
    const response = await pg_client.query(query, data);
    const data_response = {
      response: response && response.rows.length > 0 ? response.rows : [],
      status: response && response.rows.length > 0 ? 200 : 404,
      message:
        response && response.rows.length > 0
          ? this.model.type + " read successfully"
          : this.model.type + " Not Found",
    };
    return data_response;
  };

  // this method is used to find the data in the table by id
  findByIdQuery = async (id) => {
    let query = [`select `];
    let set = [];
    Object.keys(this.model.columns).forEach((key, i) => {
      if (key !== "id") {
        set.push(key);
      }
    });
    query.push(set.join(", "));
    query.push(` from ${this.model.type} where id=${id}`);
    query = query.join(" ");
    const response = await pg_client.query(query);
    const data = {
      response: response && response.rows[0] ? response.rows[0] : {},
      status: response && response.rows[0] ? 200 : 404,
      message:
        response && response.rows[0]
          ? this.model.type + " read successfully"
          : this.model.type + " not found",
    };
    return data;
  };

  // this method is used to find all the data in the table
  getAllQuery = async () => {
    let query = [`select `];
    let set = [];
    Object.keys(this.model.columns).forEach((key) => set.push(key));
    query.push(set.join(", "));
    query.push(` from ${this.model.type}`);
    query = query.join(" ");
    const response = await pg_client.query(query);
    const data = {
      response: response && response.rows.length > 0 ? response.rows : [],
      status: response && response.rows.length > 0 ? 200 : 404,
      message:
        response && response.rows.length > 0
          ? this.model.type + " read successfully"
          : this.model.type + " Not Found",
    };
    return data;
  };
}

export default DbService;
