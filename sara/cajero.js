/*Cajero Automático

El objetivo de este ejercicio es crear un cajero automático que funcione solamente con la consola del navegador.

Importante:
No es necesario incluir Html o css
No es necesario encapsular el código en una función anónima

Objetivos:
Crear el cajero como un objeto literal
Añadir detalles como empresa, tipo, materiales, tamaño, moneda, etc...
Añadir métodos para el usuario administrador (añadir y retirar dinero del deposito)
Añadir métodos para el administrador (agregar y quitar clientes de la lista de clientes autorizados)
Añadir métodos para los clientes (añadir y retirar efectivo)
Añadir métodos para validar los clientes (Clientes autorizados) y las cantidades (números reales)

Consejos:

Refactoriza a menudo
Desarrolla paso a paso, usa comentarios y pseudocódigo si es necesario
Mantén el código fácil
Utiliza herramientas como jsHint*/


var authClients = ['Pedro', 'Rosa', 'Jesús']; 
var availableMoney = 1000;

function Cajero () {
	var cajero = {};
	cajero.empresa = 'BBVA';
	cajero.materiales = ['metal', 'plástico'];
	cajero.moneda = 'euros';
	console.log(cajero)
}

Cajero.prototype.addMoney = function (availableMoney, quantity) {
	var availableMoney = availableMoney + quantity;
	console.log('la cantidad disponible es ', availableMoney)
}

Cajero.prototype.withdrawMoney = function (availableMoney, quantity) {
	var availableMoney = availableMoney - quantity;
	console.log('la cantidad disponible es ', availableMoney)
}

Cajero.prototype.addAuthClient = function (client) {
	authClients.push(client);
	console.log('clientes autorizados ', authClients);
}

Cajero.prototype.removeAuthClient = function (client) {
	var index = authClients.indexOf(client);
	authClients.splice(index, 1)
	console.log('los clientes autorizados son ', authClients)
}

Cajero.prototype.validateClient = function (client, quantity) {
	if(authClients.indexOf(client) !== -1) {
		if (typeof(quantity) === 'number') {
			console.log('el cliente ' + client + ' está autorizado y la cantidad ' + quantity + '€ es correcta')
		}
	} else {
		console.log(' el ciente ' + client + ' no está autorizado')
	}
}

var newCajero = new Cajero();

newCajero.addAuthClient('Sara');
newCajero.removeAuthClient('Rosa')
newCajero.validateClient('Sara', 10)

