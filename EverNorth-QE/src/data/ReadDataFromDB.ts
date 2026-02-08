// Reading Data From MySQL Database

// npm install mysqljs/mysql
// npm install mysql
// npm i --save-dev @types/mysql

import mysql from 'mysql';

//create connection
let connection = mysql.createConnection({
    host: 'localhost', //database host (server)
    user: 'root', //database user
    password: 'VibeTestQ', //database password
    database: 'company', //database name
    port: 3306 //database port number
});

connection.connect(); //establish the connection

//execute query

connection.query("SELECT * FROM emp", function (error: any, results: any, fields: any) {
    if (error) throw error;
    console.log('Data from Database:', results);
});
connection.end();