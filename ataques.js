const impactrueno = function(){
	return "usó Lanzallamas";
}
const placaje = function(){
	return "usó Lanzallamas";
}
const lanzaLlamas = function(){
    return "charizar usó Lanzallamas";
}
const salpicadura = function(){
    return "usó Salpicadura";
}
const terremoto = function(){
    return "usó Terremoto";
}

const atacar = function(ataque) {
    return function(personaje) {
        return ataque() + " contra " + personaje;
    }
}

console.log(atacar(lanzaLlamas)("magikarp"));