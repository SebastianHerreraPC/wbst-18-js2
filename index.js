console.log("hola mundo");

// comparadores y operadores

console.log(7 > 6); //mayor que
console.log(7 < 6); //menor que
console.log(7 >= 6); //mayor o igual a
console.log(7 <= 6); //menor o igual a
console.log(70 == "70"); // igualdad
console.log(70 != 60); //desigualdad
console.log(70 === "70"); //igualdad estricta
console.log(70 !== 70); //desigualdad estricta

//sentencias condicionales:

let lavariable = true;

if (lavariable) {
  console.log("😬");
} else {
  console.log("🙄");
}

//sentencia con varias condiciones

let precios = 1000;

if (precios < 1000) {
  console.log("subio");
} else if (precios > 1000) {
  console.log("bajo");
} else if (precios == 1000) {
  console.log("esta igual");
} else {
  console.log("Algo esta pasando");
}

//NOT, AND Y OR

let positivo = true;
let negativo = false;

//not convierte los true a false y los false a true

console.log(!positivo);
console.log(!negativo);

//and devolvera true cuando las dos variables booleanes sean verdaderas

console.log(positivo && negativo);
console.log(positivo && !negativo);
