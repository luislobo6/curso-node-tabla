// aquí importamos file system de Node para usarlo más adelante
const fs = require('fs')

// la volvimos asíncrona para hacerla una Promesa y mandarla llamar en nuestra app principal
const crearArchivo = async( base = 5 , listar = false , hasta = 10) => {
    
    (listar) ? console.log("==================".green): null;
    (listar) ? console.log(`  Tabla del: ${base}`.green) : null;
    (listar) ? console.log("==================".green) : null;
    
    let salida = '';

    // intentamos generar la salida y guardar el archivo
    try {
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        (listar) ? console.log(salida): '';
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    } catch (error) {
        throw error; // si marca error solo lo re-lanzamos
    }
    // si no hubo error, entonces regresamos el mensaje con el nombre del archivo
    return `tabla-${base}.txt`;

}

// Esta parte se necesita para indicarle a Node que vamos a exportar esta funcion,
// para la nueva version de JS si ponemos crearArchivo: crearArchivo -> una propiedad
// con el mismo nombre y valor, podemos ahorrarnos un poco de código y solo ponerlo una vez
// module.exports = {
//     crearArchivo: crearArchivo
// }
module.exports = {
    crearArchivo
}