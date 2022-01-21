import pg_client from "../adapters/database/postgresql.js";

class DbService {
  constructor(model) {
    this.model = model;
  }

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
    return response.rows[0];
  };

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
    return response.rows[0];
  };

  deleteByIdQuery = async (id) => {
    // const device = await pg_client.query("DELETE FROM devices WHERE id = $1", [id]);
    let query = `delete from ${this.model.type} where id=${id} returning *`;
    const response = await pg_client.query(query);
    return response.rows[0];
  };

  findByIdQuery = async (id) => {
    // "SELECT vehicle_id, device_type_id, device_name, is_online, is_active FROM devices WHERE id=$1",
    // let query = `select from ${this.model.type} where id=${id} returning *`;
    let query = [`select `];
    let set = [];
    Object.keys(this.model.columns).forEach((key) => {
      if (key !== "id") {
        set.push(key);
      }
    });
    query.push(set.join(", "));
    query.push(` from ${this.model.type} where id=${id}`);
    query = query.join(" ");
    const response = await pg_client.query(query);
    return response.rows[0];
  };

  getAllClassesQuery = async () => {
    let query = [`select `];
    let set = [];
    Object.keys(this.model.columns).forEach((key) => set.push(key));
    query.push(set.join(", "));
    query.push(` from ${this.model.type}`);
    query = query.join(" ");
    const response = await pg_client.query(query);
    return response.rows;
  };
}

export default DbService;

// const db=require("../database_connection")
// // db.connect()
//  module.exports = class Service {
//   //CRUD transactions
//   constructor(model){
//     this.model=model
//   }
//   async insertQuery(data){
//     let query = [`insert into ${this.model.type}(`]
//     let set = []
//     let values = []
//     Object.keys(this.model.cols).forEach(function (key, i) {
//       if (key !== "id") {
//         set.push(key)
//         values.push(`$${i + 1}`)
//       }
//     })
//     query.push(set.join(", "));
//     query.push(") values(")
//     query.push(values.join(", "))
//     query.push(")  RETURNING *")

// console.log(query.join(" "), data);
// db.query(query.join(" "), data, (err, res) => {
//   if (err) return -1;
//   console.log(res.rows + "---->");
//   db.end();
// });

//   }

// async updateQueryById(id, cols, type) {

//   let query = [`UPDATE ${type}`]
//   query.push("SET")
//   let set = []
//   Object.keys(cols).forEach(function (key, i) {
//     if (key !== "id") {
//       set.push(key + " = ($" + i + ")")
//     }
//   })
//   query.push(set.join(", "))
//   query.push("WHERE id = " + id + " RETURNING *")
//   return query.join(" ")
// }

//   getColValues(body){
//     const arr = Object.keys(body)
//       .filter((item) => item !== "id")
//       .map(function (key) {
//         return body[key]
//       })
//     return arr
//   }

//   getAllItems(){
//     console.log(this.model.type)
//     db.query(select * from ${this.model.type}, (err,res)=>{
//       if(err)
//           return -1;

//       db.end()
//       console.log(res.rows)
//       return this.getColValues(res.rows)
//     })
//   }

//  }
