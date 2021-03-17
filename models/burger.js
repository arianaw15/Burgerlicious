const orm = require('../config/orm');

const burgerModel = {
selectAll(){
    orm.selectAll('burger_name','burger');
},  
updateOne(){
    orm.updateOne('burger_name','burger','devoured',true)
} 
};

module.exports = burgerModel;