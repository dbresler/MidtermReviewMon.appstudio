/*
Write a program that uses an array(s) to keep track of
employees and the number of years they have been at the
company. Use the data below.
Then let the user add a new employee and years
of service, and delete the last employee added using an array method.
You must use array(s), array method(s), for loop(s), and if/else
statement(s).
Output to the console: 
> the array(s), one name per line, before data has been changed
> the array(s) after a new employee has been added
> the array(s) after the last employee has been deleted.

Use this data:
  Mary Edwards, 22 years, Don Smith, 10 years, Tricia Evans, 5 years
*/

/*setting up the names of the employees and the years*/ 
let employees = ['Mary Edwards', 'Don Smith','Tricia Evans'] 
let years = [22, 10, 5]
for(i = 0; i < employees.length; i++)
  console.log(`${employees[i]} with years ${years[i]}.`)

/*adding a new item to an array*/ 
let newEmp = prompt("Enter the name of a new employee")
employees.push(newEmp)
years.push(0)

for(i = 0; i < employees.length; i++)
  console.log(`${employees[i]} with years ${years[i]}.`)

employees.pop()
years.pop()

for(i = 0; i < employees.length; i++)
  console.log(`${employees[i]} with years ${years[i]}.`)