//ANY Data type
// Which allows a variable to hold values of any type.
// If you are not sure about data type of variable you can use any



// Any Data Type Use
// When migrating JavaScript code to TypeScript.

// When dealing with dynamic values from APIs(pta nhi hota h kis type ka data aaye ga)

// When working with third-party libraries that lack type definitions.



// Unknown Data Type Use
// The unknown type in TypeScript is similar to any, but it's safer

// because it forces type checking before performing operations on the value.



var value:any ="Anil";

value=100

value=['anil'];

value=true;
value={}

var value1:unknown ="anil";
value1=100;

value1=['anil'];
value1={};//object
value1="Anil sidhu"

//unknown mai typoe check karna jarurai h
if(typeof value1=='string'){

console.log(value1.toUpperCase());
}