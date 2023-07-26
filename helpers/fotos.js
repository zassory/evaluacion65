const fs = require('fs/promises');

const consultarFoto = async(opcionFoto) => {
        
    try{
        const datos = await fetch(`https://jsonplaceholder.typicode.com/photos/${opcionFoto}`);
        const fotoAgregar = await datos.json();

        await fs.writeFile('./datos/fotos.txt',JSON.stringify(fotoAgregar));

    }catch(error){
        console.log(error);
    }
}

module.exports = consultarFoto;