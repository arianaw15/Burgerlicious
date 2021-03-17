const connection = require('./connection');

const orm = {
selectAll(burgers){
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString,[burgers], (err, result) => {
        if (err) throw err;
        console.table(result);
      }
      );
},
};

// insertOne(){
//     const queryString = 'INSERT INTO ?? (??) VALUES (??)';
//     connection.query(queryString,[burgers,burger_name,value],(err, result) => {
//         if (err) throw err;
//         console.table(result);
//       },
//       );
// }

module.exports = orm;