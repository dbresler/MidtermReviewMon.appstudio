/*
Copy the original employees and years arrays from #4. 
Then add a function needed to answer the question: 
Who has worked at the company the longest? 
Call the function from the main program, return the index 
of the largest number of years employed, and from the 
main program output their name. Use an alert for output. 
Note: change the names of any variables used in the form 'four' 
so they aren't duplicates as the project will tell you that you have already declared variables 
with these names.A simple way it to just add a 2 on the end.
*/

let employees2 = ['Mary Edwards', 'Don Smith','Tricia Evans']
let years2 = [22, 10, 5]
for(i = 0; i < employees2.length; i++)
  console.log(`${employees2[i]} with years ${years2[i]}.`)

//who has worked longest hours
let longestTime = years2[0]

let locationIndex = 0
//went through array...

for (i = 1; i < years2.length; i++)
  if (longestTime < years2[i]) {
    longestTime = years2[i]
    locationIndex = i
  }
  
alert(`${employees2[locationIndex]}`)