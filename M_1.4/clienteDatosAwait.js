const servicio = require("./servicioDatosPromises");

async function obtenerDatos() {
    try {
        await servicio.getDatos(1, 3000);
        await servicio.getDatos(2, 500);
        await servicio.getDatos(3, 4000);
        await servicio.getDatos(4, 700);
        await servicio.getDatos(5, 3500);
        console.log("Programa terminado");
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

obtenerDatos();