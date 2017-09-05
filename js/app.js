var abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var cont = 0;

var checkBoolean = function(){
	
	
}

var hasUniqueCharacters = function (values) {

	values = values.split("")
	console.log(values)

	abecedario.forEach(function(letra){
		values.forEach(function(value){
			if (letra == value) {
				cont += 1;
			} 
			
			
		})
	})
	
	if(values.length == cont){
		console.log("TRUE")
	}else{
		console.log("FALSE")
	}
	

}

/*falta optimizar para hacerlo mas pequeño /^A,Z^ caracteres especiales/ */
hasUniqueCharacters("hola")
hasUniqueCharacters("hola HOLAcomo estas")
hasUniqueCharacters("holacomoestas?")

