--Below drops the employee tracker database if it already existed--
DROP DATABASE IF EXISTS tracker_db;

--Below creates the employee tracker database--
CREATE DATABASE tracker_db;

--Below selects the employee tracker database to use--
USE tracker_db;

--Below creates the table called department--
CREATE TABLE department (
    --Below creates the numeric column calles id which automatically increments its default value as we create new rows--
    id INT PRIMARY KEY,
    --Below makes a string column called name which cannot contain null and holds department name--
    name VARCHAR(30) NOT NULL
);

--Below creates the table called role--
CREATE TABLE role (
    --Below creates the numeric column like shown above in department--
    id PRIMARY KEY,
    --Below creates a string for the title--
    title VARCHAR(30) NOT NULL,
    --Below creates the decimal for the salary number--
    salary DECIMAL(15) NOT NULL,
    --Below tags the department in the table above to the role here--
    department_id INT NOT NULL
);

--Below creates the table called employee--
CREATE TABLE employee (
    --Below creates the numeric column like shown above in department--
    id INT PRIMARY KEY,
    --Below creates a string for the first name--
    first_name VARCHAR(30) NOT NULL,
    --Below creates a string for the last name--
    last_name VARCHAR(30) NOT NULL,
    --Below tags the role in the table above to the employee here--
    role_id INT NOT NULL,
    --Below tags who the manager is to the employees--
    manager_id INT NOT NULL
);