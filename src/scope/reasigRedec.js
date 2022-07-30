//Redeclaracion y reasignacion
var firstName; // Undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = "Ana"; // reasignar
console.log(lastName);

var secondName = "David"; // declarando / asignando
var secondName = "Ana"; // reasignado
console.log(secondName);

//// Let,no permite redeclarar
//let fruit = "Apple"; // declara y asignar
//fruit = "Kiwi"; // reasignar
//console.log(fruit);
//
//let fruit = "Banana";
//console.log(fruit);

//// const, no permite redeclarar
//const animal = "dog"; // declara y asigna
//// animal = 'cat'; // reasignado
//const animal = "Snake";
//console.log(animal);

const vehicles = [];
vehicles.push("car");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
