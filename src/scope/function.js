// Local Scope o funcion scope
function greeting() { //funcion saludo en español
    let username = 'ana';
    console.log(username);
    if (username === 'ana') { //triple igualdad por que se validar valor y tipo.
        console.log(`Hello ${username}!`);// ` `, template stream
    }
}

greeting();
console.log(username);
//no es posible usar una variable fuera del scope

