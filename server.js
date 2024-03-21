//Below are the packages needed to run the application
const inquirer = require("inquirer");
const mysql = require("mysql2");

//Below shows how to connect to the database i got from activity 12 in class
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);