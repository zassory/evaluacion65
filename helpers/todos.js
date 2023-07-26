const fs = require('fs/promises');

const consultarTodo = async(opcionTodo) => {
        
    try{
        const datos = await fetch(`https://jsonplaceholder.typicode.com/todos/${opcionTodo}`);

        const todosAgregar = await datos.json();
        
        await fs.writeFile('./datos/todos.txt',JSON.stringify(todosAgregar));
        

    }catch(error){
        console.log(error);
    }
}

module.exports = consultarTodo;