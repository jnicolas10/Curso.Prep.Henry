//Lección 3: Javascript III (Array)
/*
Arrays
un array es una coleccion de elementos que puede contener variables de tipo entero, cadena, y boleanos.
length
utilizamos el metodo length para  saber la longitud de un array 
const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

console.log(nombresEstudiantes.length);  // 4
Acceso a elementos en una matriz
podemos acceder a un elemento de un array escribiremos el nombre o la variable de matriz, seguidos de corchetes que contienen la asignación numérica.
const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

console.log(nombresEstudiantes[1]);  // 'Antonio'
Asignación
Podemos asignar y reasignar cualquier índice en la matriz usando el paréntesis/índice y un "=".
const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes[0] = 'Jorge';

console.log(nombresEstudiantes);  // ['Jorge', 'Antonio', 'Sara', 'Samuel']
 
push, pop, unshift,shift
 ulilizamos el metodo push para agregar un elemento al final del un array
 const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes.push('Patricia');

console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara', 'Samuel', 'Patricia']

el metodo pop nos permite eleiminar el ultimo elemento de un array 
const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes.pop();

console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara']

unshift agregamos un elemento al inicio de un array y el metodo shift elimina el primer elemento de un array

const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes.unshift('Leo');

console.log(nombresEstudiantes);  // ['Leo', 'Martin', 'Antonio', 'Sara', 'Samuel']

nombresEstudiantes.shift();

console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara', 'Samuel']





*/
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
    var  incrementar_array =[]; 
  for (let i = 0; i < array.length; i++) {
     incrementar_array[i] = array[i] + 1;    
  } 
  return incrementar_array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array.push(elemento);
   return array;
  
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
     array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
  
  }
    


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {   
  if(array[i] === elemento){
    return true;
   }
   }
    return false;
     }
  
 
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma =0;
  for (let i = 0; i < numeros.length; i++) {
     suma = suma +  numeros[i]; 
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma =0;
  var promedio_test=0;
  for (let i = 0; i < resultadosTest.length; i++) {
     suma = suma +  resultadosTest[i];
    promedio_test = suma / resultadosTest.length;
  }
  return promedio_test;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
     numeros[i];
      if(numeros[i] > max){
        max = numeros[i];
      }  
       }
      return max;
  }


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length <1)
   return 0;
   var multiplicacion = 1;
  for (let i = 0; i < arguments.length; i++) {
      multiplicacion = multiplicacion *  arguments[i];
    
  }
  return multiplicacion;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
