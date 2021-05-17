const orm = require('../config/orm');

const burgerModel = {
selectAll(cb){
    orm.selectAll('burger_name','burger', (res) => cb(res));
},  
insertOne(value){
    orm.insertOne(value, (res) => cb(res));
}
// updateOne(){
//     orm.updateOne('burger_name','burger','devoured',true)
// } 
};

module.exports = burgerModel;