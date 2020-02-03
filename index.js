// Import stylesheets
import './style.css';

//Test case -1 : Display all account numbers in a new array using map()
var accData = [
	{acctNum: 'AAA - 1234', user: 'Alice'},
	{acctNum: 'AAA - 5231', user: 'Bob'},
	{acctNum: 'AAA - 9921', user: 'Charlie'},
	{acctNum: 'AAA - 8191', user: 'Alice'}    
];

var newarray = accData.map(myFunction)
function myFunction(num) {
  return num.acctNum;
}
console.log(newarray)

//Test case -2 :Sorted by balance in ascending order 
var balance = {
	'AAA - 1234': 45.22,
	'AAA - 9921': 0,
	'AAA - 5231': 232142.5,
	'AAA - 8191': 4344
 }
 
var sortable = [];
for (var accNumber in balance) {
    sortable.push([accNumber, balance[accNumber]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(sortable) //Please check in console: balance in ascending order


//Test case -2 : Filter each user in console

var names =  accData.filter(function(name) {
	return name.user == 'Bob';
});

console.log(names); //Please check in console: it will display Bob details

