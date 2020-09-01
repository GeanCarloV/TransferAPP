export const verificacionPassword = (string) => {
    // verifica el passwor si tiene una mayuscula,
    // si tiene una miniscula 
    // si tiene un caracters especial 
    // no haya numero secuenciados
    let mayusculas = /[A-Z]/;
    let minusculas = /[a-z]/; 
    let especial = /[\W]/;
    let consecutivo =  /(?:(?=01|12|23|34|45|56|67|78|89)\d)+\d/;
    
    if(consecutivo.test(string)) {
        return 1
    }

    if(mayusculas.test(string) && minusculas.test(string) &&  especial.test(string) && !(consecutivo.test(string))) { 
        return true 
    }
    
    return false 
}

export const generarNuevoColor = () => {
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
    }
 
    return color   
}
