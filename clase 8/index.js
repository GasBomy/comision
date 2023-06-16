/* Tipos de datos */

//Undefined

//Null

//Boolean:
true // valor 1
false // valor 0

//strings:
'hola'
'chau'

//Numbers
7
0
-7
8.4
Infinity
NaN //Not a Number
//Operadores Aritmeticos

//+ Concatenar (solo si hay string o mas de uno) = siempre devuelve un string

//+ Sumar (si no hay un string) => siempre devuelven numeros

//-, *, /, % => siempre devuelven numeros

/* Comparadores => devuelven booleans 3 == '3' => true : false*/




true == 'true' //false
true == 1 //true
true == '1' //true
9 * undefined //NaN 

7 - '5'  //2

'true' > 4 //false

2 * '8' //16

NaN == NaN //false

'' + NaN // 'NaN'

'' + '' // ''

true / 5 // 0.2

/* La funcion prompt siempre devuelve un string */

let edad = prompt('ingrese su edad')
if(isNaN(edad)){
    alert('No has colocado un numero')
}else{
    alert('El año que viene tendras ' +  (Number(edad) + 1)) 
}