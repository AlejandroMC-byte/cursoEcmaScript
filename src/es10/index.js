let array = [1,2,3, [1,2,3,[1,2,3]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value =>[value,value*2]));

let hello = '     hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 ='Hello world     ';
console.log(hello);
console.log(hello.trimEnd());

try{

}catch{
    error //disponible sin necesidad de declararlo en el catch
}

let entries =[['name','oscar'],['age',32]];

console.log(Object.fromEntries(entries));

let mySimbol = `My Symbol`;
let symbol =Symbol(mySimbol);
console.log(symbol.description);