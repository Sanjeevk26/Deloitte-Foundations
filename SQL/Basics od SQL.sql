USE classicmodels;
SELECT * FROM employees;
SELECT * FROM employees WHERE lastName="Murphy";
SELECT firstName FROM employees WHERE firstName LIKE "M%";
SELECT * FROM employees ORDER BY firstName DESC;
SELECT * FROM employees GROUP BY officeCode ;


-- This is a comment

Select COUNT(firstName), firstName from employees where jobTitle = "Sales Rep";
Show Databases;
Show Tables;
Describe Customers;