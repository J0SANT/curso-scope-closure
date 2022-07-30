//variables
var a; //declaramos la variable -> a
var b = "b"; //declaramos y asignamos
b = "bb"; //reasignando
var a = "aa"; //redeclaracion

// Global Scope
var fruit = "apple"; //global
  console.log(fruit);

function bestfruit() {
  console.log(fruit);
}
bestfruit();

//si no se declara una variable por defecto es  global
