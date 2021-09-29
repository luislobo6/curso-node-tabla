// importamos la función que creamos en la carpeta de helpers dentro del JS de multiplicar
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// se usa process.argv para recibir los argumentos de la consola, el primer argumento es
// la ruta del node y el segundo la carpeta donde se está ejecutando el programa, el tercero
// es el que pasamos nosotros con --base=9, hacemos desestructuración para solo obtener el arg3
// const [ , , arg3 = "base=5" ] = process.argv;
// const [ , base=5 ] = arg3.split("="); // hacemos split para traer solamente el número y desestructuración
// console.log(process.argv);
// console.log(argv);


// como es una Promesa, podemos usar el then y catch
crearArchivo( argv.b, argv.l , argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow," creado!") )
    .catch( err => console.log(err));

