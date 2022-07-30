//Block Scope (alcance de bloque) y se introdujo en ES6
function fruits() {
  if (true) {
    var fruit1 = "apple";
    let fruit2 = "kiwi";
    const fruit3 = "banana";
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}
fruits();
// forma correcta de usar block scope
function fruits() {
  if (true) {
    var fruit1 = "apple";
    let fruit2 = "kiwi";
      const fruit3 = "banana";
        console.log(fruit2);
        console.log(fruit3);
  }
  console.log(fruit1);

}
fruits();
