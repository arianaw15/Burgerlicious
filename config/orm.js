const connection = require('./connection.js');

const orm = {
selectAll(burgerName, burgers){
    const queryString = `SELECT ?? FROM ??`;
    
    connection.query(queryString,[burgerName, burgers],(err, result) => {
        if (err) {
            throw err;
        }
        // cb(result);
      });
},
// updateOne(burgerName,burgers,devoured,boolean){
//     const queryString = 'SELECT ?? FROM ?? WHERE ??=??';
//     connection.query(queryString,[burgerName,burgers,devoured,boolean], (err,result)=>{
//         if (err) throw err;
//         console.table(result);
//     });
// },
// 

insertOne(value,cb){
    console.log(value);
    let queryString = `INSERT INTO burger (burger_name) VALUES (??)`;
    console.log(queryString);
    connection.query(queryString,value,(err, result) => {
        if (err) {
        throw err;
        }
        cb(result);
      });
}
}
;



module.exports = orm;