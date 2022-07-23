function newFunction(name,age,country){
    var name =name || 'oscar';
    var age =age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

//es6
function newFunction2(name='oscar',age=32,country='MX'){
    console.log(name,age,country)
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let hello = "Hello";
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "simply dummy text of the printing and typesetting industry. \n"
+ "Otra frase epica";

//es6
let lorem2  =`Otra frace epica que necesitamos 
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name':'oscar',
    'age' : 32,
    'country' : 'MX'
}
console.log(person.name,person.age)

//Ecmascript6
let {age,country} =person;
console.log(age,country);

let team1 =['Oscar', 'Julian', 'Ricardo'];
let team2 =['Valeria', 'Yesica', 'Camila'];

//Agregacion de arreglos con EcmaScript
let education = ['David', ...team1, ...team2];

//VAR para declaraciones de forma global
{
    var globalVar ='Global Var';
}
console.log(globalVar)
//LET para declaraciones solo dentro del bloque de codigo
{
    var GlobalLet ='Global Let'

    console.log(GlobalLet)
}
//CONST para una declaracion que es constante y jamas cambia
const a ='b';


//Asignacion de objetos

let name ='Oscar';
let ages =32;

//esc5
obj ={name:name,age:age};
//esc6
obj2 = {name,ages};
console.log(obj2);

//Función tradicional
function nombre (parámetros) {
    return (valorRetornado)
}

//Función flecha
const nombre = (parámetros) => {
    return (valorRetornado)
}

//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2

//Promesas
const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!')
        } else{
            reject('Ups!!')
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//CLASES

class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valuaA,valueB){
        this.valueA=valuaA;
        this.valueB=valuaB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Importacion y Exportacion de funciones

import {hello} from './module'

hello();

//Funcion generadora
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
