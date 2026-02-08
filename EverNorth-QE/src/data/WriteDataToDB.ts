// Reading Data From MySQL Database

// npm install mysql2

import mysql from 'mysql2'; // for new authonticaiton methods

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
let q = "INSERT INTO emp (id, name, age, sal) VALUES (28, 'evernorth', 20,123456);";

connection.query(q, function (error: any, results: any, fields: any) {
    if (error) throw error;
    console.log('Data from Database:', results);
});
connection.end();
