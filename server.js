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
inquirer.prompt([
    {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update employee manager", "View employees by manager", "View employees by department", "Delete departments", "Delete roles", "Delete employees", "View the total utilized budget of department", "Exit",],
    },
])


//Below shows an arrow function that creates the const for choices
//Used the following link figure out correct way to get answers formatted 
//https://stackoverflow.com/questions/71534705/inquirer-exits-before-i-am-able-to-make-a-choice-in-node-js
//https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
.then((answer) => {
    if (answer === "View all departments"){
        viewDepartments()
    } else if (answer === "View all roles"){
        viewRoles()
    } else if (answer === "View all employees"){
        viewEmployees()
    } else if (answer === "Add a department"){
        addDepartment()
    } else if (answer === "Add a role"){
        addRole()
    } else if (answer === "Add an employee"){
        addEmployee()
    } else if (answer === "Update an employee role"){
        updateEmployee()
    } else if (answer === "Update employee manager"){
        updateManager()
    } else if (answer === "View employees by manager"){
        viewByManager()
    } else if (answer === "View employees by department"){
        viewByDepartment()
    } else if (answer === "Delete departments"){
        deleteDepartments()
    } else if (answer === "Delete roles"){
        deleteRoles()
    } else if (answer === "Delete employees"){
        deleteEmployees()
    } else if (answer === "View the total utilized budget of department"){
        viewBudget()
    } else {
        exit()
    }
})

const viewDepartments = () => {
    connect.query(
        "SELECT * FROM department;",
    )
};
const viewRoles = () => {
    connect.query(
        "SELECT * FROM role;",
    )
};
const viewEmployees = () => {
    connect.query(
        "SELECT * FROM employee;",
    )
};
