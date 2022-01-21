// class Classes {
//   constructor({
//     school_id,
//     floor_num,
//     class_name,
//     detail,
//     created_at,
//     created_by,
//     is_active,
//   }) {
//     this.school_id = school_id;
//     this.floor_num = floor_num;
//     this.class_name = class_name;
//     this.detail = detail;
//     this.created_at = created_at;
//     this.created_by = created_by;
//     this.is_active = is_active;
//   }
// }

//Üstteki iler belki kopya çekmek için lazım olur diye bıraktık

class ClassesModel {
  columns = {
    id: "",
    school_id: "",
    floor_num: "",
    class_name: "",
    detail: "",
    created_by: "",
    is_active: "",
    created_at: "",
  };
  type = "classes";
}

// module.exports = new TruckModel()

// export default new ClassesModel();

const classModel = new ClassesModel();
export default classModel;
