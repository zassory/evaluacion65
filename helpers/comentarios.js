const fs = require('fs/promises');

const consultar = async(comentario) => {

        
    try{
        const datos = await fetch(`https://jsonplaceholder.typicode.com/comments/${comentario}`);
        const comentarioAgregar = await datos.json();
        
        await fs.writeFile('./datos/comentarios.txt',JSON.stringify(comentarioAgregar));

    }catch(error){
        console.log(error);
    }
}

module.exports = consultar;