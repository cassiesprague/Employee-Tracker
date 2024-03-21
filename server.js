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
    console.log(`Connected to the tracker_db database!`)
);

//Below shows my first question that will show when running the app
inquirer
.prompt(
    {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update employee manager", "View employees by manager", "View employees by department", "Delete departments", "Delete roles", "Delete employees", "View the total utilized budget of department", "Exit",],
    }
)

//Below shows an arrow function that creates the const for choices
.then((answers) => {
    const {choices} = answers;
})
