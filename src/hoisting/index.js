console.log(x); //❌ ReferenceError: Cannot access 'x' before initialization
let x = 5;

nameOfDog();

function nameOfDog() {
  console.log(`El mejor perro es ${namePerro}`);
}

// Pero si agregamos o definimos una varible si se ejecuta el codigo
var namePerro;

// "El mejor perro es _undefined_"
nameOfDog("Elmo");
function nameOfDog(name) {
  console.log(name);
}
const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "kiwi";
  }
};