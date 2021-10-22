// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const elemento = array[0];
  return elemento;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const last= array[array.length-1];
  return last;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const largo=array.length;
  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let j=0; j< array.length; j++){
    array[j]=array[j] + 1;
  }
    return array;
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
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras[0];
  for (k = 1; k < palabras.length; k++){
       frase = frase + ' ' + palabras[k];
  }
       return frase;
  }


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i=0; i < array.length;i++)
  {
    if (elemento === array[i])
    {
      esta= true;
      return esta;
    }
  }
  esta = false;
  return esta;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   var suma = 0;
  for (l = 0; l < numeros.length; l++)
  {
    suma= suma + numeros[l];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promcalc = 0;
  for (i = 0; i < resultadosTest.length; i++)
  {
    promcalc = promcalc + resultadosTest[i];
  }
  promcalc =(promcalc/(resultadosTest.length));
  return promcalc;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = 0;
  for ( r = 0; r < numeros.length;r++)
  {
    if (mayor < numeros[r])
    {
      mayor = numeros[r];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto = 1;
  const dim = arguments.length;
  if (dim === 0)
  {
    return 0;
  }
  else 
  { 
    if (dim === 1)
    {
      return arguments[0];
    }
    else 
    {
    for (let r =0; r< arguments.length; r++)
    {
      producto = producto * arguments[r]; 
    }
  }
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0;
  for ( r = 0; r < arreglo.length; r++)
  {
    if (arreglo[r] > 18)
    {
      cont = cont +1;
    }
  }
  return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  if (numeroDeDia === 1 || numeroDeDia === 7)
  {
    return 'Es fin de semana';
  } 
  return 'Es dia Laboral'
  } 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var  num= n.toString().split('');
  num = num[0];
  if (num === '9' )
  {
  return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  comp = arreglo[0];
  for (r=1; r< arreglo.length ; r++)
  {
    if (comp !== arreglo[r]){
      return false;
    }
  }  
  return true 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var neu=[];
  var j= 0
  for (r=0;r<array.length;r++)
  {
    if(array[r] === 'Enero' || array[r] === 'Marzo' || array[r] === 'Noviembre')
    {
      neu[j]=array[r];
      j+=1;
    }    
  }
  j= neu.length;
  if(j !== 3)
  {
    return 'No se encontraron los meses pedidos';
  }

 return neu;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var gtcien= [];
  r=0;
  for (i=0; i< array.length; i++)
  {
    if (array[i]> 100)
    {
      gtcien[r]=array[i];
      r++;
    }
  }
  return gtcien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var neu=[];
  var j=numero;

  for (i=0; i< 10 ; i++)
  {
    j+=2;
    neu[i]=j;
    if(i === j)
    {
      neu = 'Se interrumpió la ejecución';
      break;
    }
  }
  return neu;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var neur=[],j=numero;
  for (i=0;i<9; i++)
  {
    j+=2;
    neur[i]=j;
    if(i ===5)
      {
        continue;
      }
  }
  return neur;
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
