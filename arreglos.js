//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
let arreglo = [];
let numeros = "1,2,3,4,5,6,7,8,9,10";
let arregloNumeros = numeros.split(",");

console.log(arregloNumeros);

//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

// Solicitar al usuario que ingrese el string de palabras separadas por coma
let input = prompt("Ingrese varias palabras separadas por coma:");

// Convertir el string en un array
let palabras = input.split(",");

// Mostrar el resultado en la consola
console.log(palabras);

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

let array = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
array.sort(function(a, b) {
  return a - b;
});

// Obtener el número menor (primer elemento del arreglo)
let numeroMenor = array[0];

// Obtener el número mayor (último elemento del arreglo)
let numeroMayor = array[array.length - 1];

// Mostrar el arreglo ordenado, el número menor y el número mayor
console.log("Arreglo ordenado de menor a mayor:", array);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);

