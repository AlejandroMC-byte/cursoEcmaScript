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
let {name,age,country} =person;
console.log(name,age,country);

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
