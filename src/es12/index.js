const string = "JavaScript es maravillo, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python"); // solo primer elemento
const replacedString2 = string.replaceAll("JavaScript", "Python"); // Todos los elementos

console.log(replacedString);
console.log(replacedString2);

class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise2])
    .then(reponse =>console.log(response));


class anyClass{
    constructor(element){
        this.ref =new WeakRef(element)
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue ||= isFalse);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue &&= isFalse);