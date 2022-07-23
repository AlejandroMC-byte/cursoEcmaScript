/*
    funcion Object.entries(object) nos ayuda a saber comoe sta diseñado
    nuestor objecto y mostrar sus llaves e informacion

    Creando una variable de Object.entries, podemos usar la funcion .length
*/
const data ={
    frontend: 'Oscar',
    backend: 'ISabel',
    design: 'Ana',
}

const entries =Object.entries(data);
console.log(entries);
console.log(entries.length);

/*
    funcion Object.values(object) nos muestra la informacion de un objeto
    sin sus llaves
*/

const values = Object.values(data)
console.log(values)

const string ='Hello';
console.log(string.padStart(7,'hi'));
/*
    Async y await
*/

const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async ()=>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();