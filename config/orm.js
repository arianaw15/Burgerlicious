const connection = require('./connection.js');

const orm = {
selectAll(burgerName, id, burgers, cb){
    const queryString = `SELECT ??, ?? FROM ??`;
    
    connection.query(queryString,[burgerName, id, burgers],(err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
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

insertOne(burger){
    console.log(burger);
    let queryString = `INSERT INTO burger (burger_name) VALUES (?)`;
    // console.log(queryString);
    connection.query(queryString,burger,(err, result) => {
        if (err) {
        throw err;
        }
        // cb(result);
      });
},

deleteOne(id,cb){
    let queryString =`DELETE FROM burger WHERE id = ?`;
    connection.query(queryString,id,(err,result)=>{
        if (err){
            throw err;
        }
        cb(result);
    });
}
}
;



module.exports = orm;