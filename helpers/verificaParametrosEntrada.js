const verificarParametrosEntrada = (argumentosEntrada) => {
    if(argumentosEntrada.length === 0){
        console.log("Por favor ingrese las siguientes opciones");
        console.log("Opcion 1: comentarios");                
        return process.exit();
    }
}

module.exports = verificarParametrosEntrada;