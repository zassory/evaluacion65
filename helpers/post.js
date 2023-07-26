const fs = require('fs/promises');

const consultarPost = async(opcionPost) => {
        
    try{
        const datos = await fetch(`https://jsonplaceholder.typicode.com/posts/${opcionPost}`);
        
        const postAgregar = await datos.json();
        
        await fs.writeFile('./datos/post.txt',JSON.stringify(postAgregar));

    }catch(error){
        console.log(error);
    }
}

module.exports = consultarPost;