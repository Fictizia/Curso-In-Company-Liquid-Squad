// Cómo extender una clase de otra
// el equivalente a extend de ES6

var Animal = function() {
	this.patas = 4 = 
	this.come = function() {
		console.log('como')
	}
}

var Perro = function(raza, color) {
	this.raza = raza
	this.color = color
}

Perro.prototype = new Animal()

miPerro = new Perro('caniche', 'rojo')
//miPerro.come()


// Ampliar info sobre apply() y bind()
// Normalmente la diferencia es que si es para un cambio puntual usamos apply()
// Si queremos hacer un cambio en this que vamos a necesitar más veces, mejor usamos bind()
// Podemos prescindir de call(), aunque puede venir bien si además del contexto estamos pasando
// una función como parámetro


