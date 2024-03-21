INSERT INTO department (name)
VALUES  ("Reception"),
        ("Sales"),
        ("Accounting"),
        ("Customer Service"),
        ("Operations"),
        ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES  ("Receptionist", 30000, 1),
        ("Co-Manager", 45000, 2),
        ("Assistant to the Regional Manager,", 40000, 2),
        ("Salesman", 35000, 2),
        ("Head Accountant", 33000, 3),
        ("Accountant", 31000, 3),
        ("Customer Service Representative", 29000, 4),
        ("Quality Assurance Director", 30000, 5),
        ("Supplier Relations", 30000, 5),
        ("Human Resources Representative", 32000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ()