const button = document.querySelector('#btn');

button.addEventListener('click', async function (){
    const module = await import("./file.js") ;
    module.hello()
})