const connection = require('./connection');

const orm = {
selectAll(burgerName, burgers,cb){
    const queryString = `SELECT ?? FROM ??`;
    connection.query(queryString,[burgerName, burgers],(err, result) => {
        if (err) throw err;
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
// };

// insertOne(){
//     const queryString = 'INSERT INTO ?? (??) VALUES (??)';
//     connection.query(queryString,[burgers,burger_name,value],(err, result) => {
//         if (err) throw err;
//         console.table(result);
//       },
//       );
}



module.exports = orm;