--Below drops the employee tracker database if it already existed--
DROP DATABASE IF EXISTS tracker_db;
--Below creates the employee tracker database--
CREATE DATABASE tracker_db;
--Below selects the employee tracker database to use--
USE tracker_db;
--Below creates the table called department--
CREATE TABLE department (
    --Below creates the numeric column calles id which automatically increments its default value as we create new rows--
    id INT NOT NULL,
    --Below makes a string column called name which cannot contain null and holds department name--
    name VARCHAR(30) NOT NULL
);