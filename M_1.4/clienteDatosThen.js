const servicio = require("./servicioDatosPromises");

servicio.getDatos(1, 3000)
    .then(() => {
        return servicio.getDatos(2, 500);
    })
    .then(() => {
        return servicio.getDatos(3, 4000);
    })
    .then(() => {
        return servicio.getDatos(4, 700);
    })
    .then(() => {
        return servicio.getDatos(5, 3500);
    })
    .then(() => {
        console.log("Programa terminado");
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
    });