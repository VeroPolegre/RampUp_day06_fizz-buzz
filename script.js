/* 
//fizzbuzz
let num = 0;

 for (let num = 1; num <= 1000; num++) {
   if (num % 3 === 0) {
     console.log("Fizz");
   } else if (num % 5 === 0) {
    console.log("Buzz");
   } else if (num % 3 === 0 && num % 5 === 0) {
     console.log("FizzBuzz");
   } else {
     console.log(num);
  }
 }
/*
//elevar al cuadrado
 const listaDesordenada = [-9, -2, 0, 2, 3];

 function elevarAlCuadrado(lista) {
   const listaOrdenada = [];
   for (let i = 0; i < lista.length; i++) {
     listaOrdenada.push(lista[i] ** 2);
     listaOrdenada.sort();
   }

   return listaOrdenada;
 }

 const listaOrdenada = elevarAlCuadrado(listaDesordenada);
 console.log(listaOrdenada); */

/*
//tabla multiplicar

function tablaDeMultiplicar(num) {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    const resultado = num * i;
    tabla.push(`${num}x${i}=${resultado}`);
  }
  return tabla;
}
//prompt
const num = parseInt(prompt("Introduce un numerito"));
if (num) {
  const tabla = tablaDeMultiplicar(num);
  console.log(tabla);
}

*/

function ingresarNum() {
  const resultado = [];
  while ((numero = parseInt)) {
    const numero = parseInt(prompt("Ingrese números"));
    if (numero === 0) {
      break;
    }
    resultado.push(numero); //añadir numeros al array
  }

  resultado.sort(function (a, b) {
    return a - b; //numeros ordenados
  });

  return resultado;
}

//resultado ordenado
const listaOrdenados = ingresarNum();
console.log(listaOrdenados);
