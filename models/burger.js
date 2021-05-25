const orm = require('../config/orm');

const burgerModel = {
selectAll(cb){
    orm.selectAll('burger_name','id','burger', (res) => cb(res));
},  
insertOne(burger){
    orm.insertOne(burger,(res) => cb(res));
},
deleteOne(id,cb){
    orm.deleteOne(id,(res)=>cb(res))
}
// updateOne(){
// orm.updateOne('burger_name','burger','devoured',true)
// } 
};

module.exports = burgerModel;