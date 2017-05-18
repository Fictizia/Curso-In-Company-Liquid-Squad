	var totTrains = 10,
		totWorking = 2,
		working = 'funcionando',
		stopped = 'parado',
		date = new Date(),
		dayNumber = date.getDay(),
		daysMap = [7, 1, 2, 3, 4, 5, 6],
		allWorking = 'Todos están funcionando',
		noneWorking = 'Ninguno está funcionando',
		passengers = ['Alicia Gutierrez'
			, 'Alfonso Gomez', 'Luis Navarro', 'Oscar Garcia'
			, 'Andres Fernandez', 'Lucia Mellado']



// 1 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... 
// usando while.

	function getTrainsList(totTrains, totWorking) {

		console.info('Ejercicio 1')

		var contador = 0

		while (contador <= totTrains) {
			console.log('El tren ' 
				+ contador 
				+ ' está ' 
				+ ( contador <= totWorking ? working : stopped )
			)
			contador ++
		}
	}

	//getTrainsList(totTrains, totWorking)


// 2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... 
// usando Do... While.

	function getTrainsList2(totTrains, totWorking) {

		console.info('Ejercicio 2')

		var contador = 0

		do {
			console.log('El tren ' 
				+ contador 
				+ ' está ' 
				+ ( contador <= totWorking ? working : stopped)
			)
			contador ++
		} while (contador <= totTrains)
	}


	//getTrainsList2(totTrains, totWorking)



// 3 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... 
// usando for.

	function getTrainsList3(totTrains, totWorking) {

		console.info('Ejercicio 3')

		for(var i = 0; i <= totTrains; i++ ) {
			console.log('El tren ' 
				+ i 
				+ ' está ' 
				+ ( i <= totWorking ? working : stopped)
			)
		}
	}


	//getTrainsList3(totTrains, totWorking)


// 4 - #compliquemos! Servicio nocturno en el tren 10. Nota: Frente al ejercicio anterior, 
// en este caso queremos que siempre que hablemos del tren 10 se especifique que es nocturno. 
// Independientemente de si esta parado o funcionando.


	function getTrainsList4(totTrains, totWorking) {

		console.info('Ejercicio 4')

		var getState = function(i) {
			if(i == 10)
				return working

			return i <= totWorking ? working : stopped
		}

		for(var i = 0; i <= totTrains; i++ ) {
			console.log('El tren ' 
				+ i 
				+ ' está ' 
				+ getState(i)
			)
		}
	}


	//getTrainsList4(totTrains, totWorking)



// 5 - ¡Refactoricemos! ¿Y si todos los trenes están en las vías funcionando o por el contrario si 
// ninguno de los trenes esta funcionando?.

	function getTrainsList5(totTrains, totWorking) {

		console.info('Ejercicio 5')

		totWorking = 0

		var getState = function(i) {
			if(i == 10)
				return working

			return i <= totWorking ? working : stopped
		}

		if (totTrains === totWorking)
			return console.log(allWorking)

		if (totWorking === 0)
			return console.log(noneWorking)

		for(var i = 0; i <= totTrains; i++ ) {
			console.log('El tren ' 
				+ i 
				+ ' está ' 
				+ getState(i)
			)
		}
	}


	//getTrainsList5(totTrains, totWorking)


// 6 - El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. 
// El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

	function getTrainsList6(totTrains, totWorking) {

		console.info('Ejercicio 6')

		totTrains = 15
		totWorking = 1

		var getState = function(i) {
			
			if(i == 10 || i == 12 )
				return working

			return i <= totWorking ? working : stopped
		}

		if (totTrains === totWorking)
			return console.log(allWorking)

		if (totWorking === 0)
			return console.log(noneWorking)

		for(var i = 0; i <= totTrains; i++ ) {
			console.log('El tren ' 
				+ i 
				+ ' está ' 
				+ getState(i)
			)
		}
	}


	//getTrainsList6(totTrains, totWorking)


// 7 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados. 
// El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados. 
// Este tren será el número 13.

	function getTrainsList7(totTrains, totWorking) {

		console.info('Ejercicio 7')

		totTrains = 15
		totWorking = 1

		var getState = function(i) {

			if (i === 13) 
				return daysMap[dayNumber] === 6 ? working : stopped

			if (i === 10 || i === 12 )
				return working

			return i <= totWorking ? working : stopped
		}

		if (totTrains === totWorking)
			return console.log(allWorking)

		if (totWorking === 0)
			return console.log(noneWorking)

		for(var i = 0; i <= totTrains; i++ ) {
			console.log('El tren ' 
				+ i 
				+ ' está ' 
				+ getState(i)
			)
		}
	}


	// getTrainsList7(totTrains, totWorking)


// 8 - Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista 
// y su número de asiento (basado en el orden del índice). 
// Nota: El primer asiento del tren es el 1 y no el 0.

	function getPassengers() {

		console.info('Ejercicio 8')

		for (var i = 0; i <= passengers.length - 1; i++) {

			if (passengers[i] === undefined)
				continue

			console.log('El pasajero ' 
				+ passengers[i] 
				+ ' tiene asignado el asiento ' 
				+ (i + 1)
			)
		}
	}

	//getPassengers()


// 9 - Necesitamos una función para agregar y otra para borrar pasajeros de la lista. 
// Nota: Pensemos que a la larga pueden existir más listas.

	function addElement(arr, el) {
		arr.push(el)
	}

	function removeElement(arr, el) {
		arr.pop(el)
	}

	function removeIndex(arr, index) {
		if(index > arr.length )
			return
		arr.splice(index,1)
	}

	// addElement(passengers, 'Benito Gomez')
	// removeElement(passengers, 'Benito Gomez')
	// removeIndex(passengers, 1)	

	// console.log(passengers)


// 10 - La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero 
// quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes. Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.

	function deleteIndex(arr, index) {
		delete arr[index]
	}

	// deleteIndex(passengers, 0)
	// console.log(passengers)


// 11 - Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías 
// para hacer transbordos directos entre las estaciones afectadas.
// Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán, 
// Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.
// Nota: Intenta utilizar Closures

// 	Info: - Tetuán (12)
//	Moncloa (19)
//	Hortaleza (21)


// Ejemplo de closure
function creaSumador(x) {
	// x es 4
	return function(y) {
		// y es 22
		return x + y
	}
}

// Ejemplo de cómo crear un closure
// 4 sería el entorno que paramos a la factoría
suma4 = creaSumador(4)



delays = {
	Tetuan: 12,
	Moncloa: 19,
	Hortaleza: 21
}

function createInformer(delay) {
	return function(station) {
		console.log('	- ' + station + ' (' + delay + ')')
	}
}

function printDelaysInfo() {
	return Object.keys(delays).forEach(function(station) {
		printInfo = createInformer(delays[station])
		printInfo(station)
	})	
}

passengers.forEach(function(name) {
	console.log(name + '\n	Info:')
	printDelaysInfo()
})







