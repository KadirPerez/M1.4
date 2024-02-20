let finDeTransmisionDeDatos = function (id, callback) {
    console.log('Transferencia', id, 'terminada')
    callback()
}
let obtenerDatosDeInternet = function (id, duracion, callback) {
    console.log('Proceso', id, 'obteniendo datos de internet')
    setTimeout(finDeTransmisionDeDatos, duracion, id, callback)
}

module.exports.getDatos = obtenerDatosDeInternet;