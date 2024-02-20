function formatearFecha(fecha) {
    var dia = fecha.getDate()
    var mes = fecha.getMonth() + 1
    var año = fecha.getFullYear()

    if (dia < 10) dia = '0' + dia
    if (mes < 10) mes = '0' + mes

    return dia + '/' + mes + '/' + año
}
function generarNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

try{
    const N = process.argv[2]

    if (isNaN(N)) throw new Error("No ingeso ningun valor.");
    if (N <= 0) throw new Error("El valor de N debe ser un número mayor que cero.");

    const lista = []
    const nombres = ['Juan Pérez González','María Gómez Torres','Pedro Martínez Ruiz','Ana Fernández Vázquez','Luis López Jiménez','Laura García Moreno','Carlos Díaz Alvarez','Sofía Rodríguez Romero','Diego Sánchez Navarro','Elena Pérez González','Julia Gómez Torres','Andrés Martínez Ruiz','Lucía Fernández Vázquez','Javier López Jiménez','Marta García Moreno'];
    const claves = [12345, 54321, 98765, 45678, 87654, 23456, 76543, 34567, 65432, 32109, 89012, 21098, 12309, 87654,98765]


    for(let i = 0; i < N; i++){
        lista.push(new Object)
        lista[i].clave = claves[generarNumeroRandom(0, claves.length - 1)]
        lista[i].creditos = generarNumeroRandom(4, 8)
        lista[i].nombre = nombres[generarNumeroRandom(0, nombres.length - 1)]
        lista[i].calificacion = Math.random() * 101
        lista[i].fecha = new Date(new Date(2021, 1, 1).getTime() + Math.random() * (new Date(2023, 6, 30).getTime() - new Date(2021, 1, 1).getTime()))
    }

    const objetosFiltrados = lista.filter(objeto => {
        return objeto.calificacion < 60 && objeto.fecha > new Date('2023-01-01');
    });

    const resultadoFinal = objetosFiltrados.map(objeto => {
        return { clave: objeto.clave, calificacion: parseFloat(objeto.calificacion.toFixed(2)), fecha: formatearFecha(objeto.fecha)};
    });

    
    console.log(resultadoFinal)

} catch (error) {
    console.error("Error:", error.message);
}

