let finDeTransmisionDeDatos = function (id) {
    console.log('Transferencia', id, 'terminada')
}

let obtenerDatosDeInternet = function (id, duracion) {
    console.log('Proceso', id, 'obteniendo datos de internet');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            finDeTransmisionDeDatos(id);
            resolve();
        }, duracion);
    });
};

module.exports.getDatos = obtenerDatosDeInternet;
