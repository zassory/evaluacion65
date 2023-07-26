const consultar = require('./helpers/comentarios');
const consultarFoto = require('./helpers/fotos');
const consultarTodo = require('./helpers/todos');
const consultarPost = require('./helpers/post');
const verificarParametrosEntrada = require('./helpers/verificaParametrosEntrada');

const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const comentario = argumentosEntrada[1];

const validarOpcionesEntrada = () => {    
    switch(opcion){
        case 'comentarios':            
            consultar(comentario);
            break;
        case 'fotos':
            consultarFoto(comentario);
        break;
        case 'todos':
            consultarTodo(comentario);
        break;
        case 'post':
            consultarPost(comentario);
        break;
        default:
            //Codigo para informar al usuario
            verificarParametrosEntrada(argumentosEntrada);
    }
}

validarOpcionesEntrada();
