### Ejercicios

> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)

**1 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando *while*.

```javascript
    var trenesOperativos = 3;
    var totalTrenes = 8;

    function estadoDetalle () {
    	var numeroTren = 1;
    	while(numeroTren <= totalTrenes) {
    		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    		numeroTren++
    	};
    };
```

- Respuesta esperada (consola):

```
El tren número 1 esta funcionando
El tren número 2 esta funcionando
El tren número 3 esta funcionando
El tren número 4 no esta funcionando
El tren número 5 no esta funcionando
El tren número 6 no esta funcionando
El tren número 7 no esta funcionando
El tren número 8 no esta funcionando
```

**2 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada...  usando *Do... While*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
  var numeroTren = 1;
  do {
    console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    numeroTren++
  } while (numeroTren <= totalTrenes);
};
```


**3 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada...  usando *for*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
  var numeroTren = 1;
  for (i=1; i <= totalTrenes; i++) {
    console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    numeroTren++
  }
};

```


**4 - #compliquemos!** Servicio nocturno en el tren 10.
*Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del
tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.*

```javascript
var trenesOperativos = 3;
var totalTrenes = 15;

function estadoDetalle () {
  var numeroTren = 1;
  for (i=1; i <= totalTrenes; i++) {
    if (numeroTren === 10 ){
    console.log("El tren nocturno " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));        }
    else{
    console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    }
    numeroTren++
  }
};
```


**5 - ¡Refactoricemos!** ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.

```javascript
var trenesOperativos = 5;
var totalTrenes = 10;

function estadoDetalle () {
	if(trenesOperativos === 0){
		console.log("Ningún tren está operativo");
		return
	}

	if(trenesOperativos === totalTrenes){
		console.log("Todos los trenes está operativos");
		return
	}

  for (var i = 1; i <= totalTrenes; i++) {
	  let extraInfo = "";
	  if (i === 10){
		  extraInfo += ". Info: servicio nocturno";
	  }
	  let info = "El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado");
	  console.log(info + extraInfo);
  }
};
```

**6 -** El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

```javascript
var trenesOperativos = 5;
var totalTrenes = 15;

function estadoDetalle () {
	if(trenesOperativos === 0){
		console.log("Ningún tren está operativo");
		return
	}

	if(trenesOperativos === totalTrenes){
		console.log("Todos los trenes está operativos");
		return
	}

  for (var i = 1; i <= totalTrenes; i++) {
	  let extraInfo = "";
	  if (i === 10 || i === 12){
		  extraInfo += ". Info: servicio nocturno";
	  }
	  let info = "El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado");
	  console.log(info + extraInfo);
  }
};
```


**7 -** El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados.
 El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados.
 Este tren será el número 13.

*NOTA: EL TREN 13 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código*

```javascript
var trenesOperativos = 5;
var totalTrenes = 15;

function estadoDetalle () {
	if(trenesOperativos === 0){
		console.log("Ningún tren está operativo");
		return
	}

	if(trenesOperativos === totalTrenes){
		console.log("Todos los trenes está operativos");
		return
	}

  for (var i = 1; i <= totalTrenes; i++) {
	  let extraInfo = "";

		if(i === 13){
			var date = new Date();
			if(date.getDay() === 6){
				extraInfo += ". Info: ¡Tren fiestero!";
			}
		}

	  if (i === 10 || i === 12){
		  extraInfo += ". Info: servicio nocturno";
	  }

	  let info = "El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado");
	  console.log(info + extraInfo);
  }
};
```


**8 -** Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
var seats = [
	'Alicia Gutierrez',
	'Alfonso Gómez',
	'Luis Navarro',
	'Óscar Garcia',
	'Andrés Fernández',
	'Lucía Mellado'
];

function printPassengers(seats){
	for (var i = 0; i < seats.length; i++) {
		console.log('El pasajero ' + seats[i] + ' tiene reservado el asiento ' + (i+1));
	}
}
```

- Respuesta esperada (consola):
```
	El pasajero Alicia Gutierrez tiene reservado el asiento 1
	El pasajero Alfonso Gomez tiene reservado el asiento 2
	El pasajero Luis Navarro tiene reservado el asiento 3
	El pasajero Oscar Garcia tiene reservado el asiento 4
	El pasajero Andres Fernandez tiene reservado el asiento 5
	El pasajero Lucia Mellado tiene reservado el asiento 6
```


**9 -** Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
var seats = [
	'Alicia Gutierrez',
	'Alfonso Gómez',
	'Luis Navarro',
	'Óscar Garcia',
	'Andrés Fernández',
	'Lucía Mellado'
];

function printPassengers(seats){
	for (var i = 0; i < seats.length; i++) {
		console.log('El pasajero ' + seats[i] + ' tiene reservado el asiento ' + (i+1));
	}

	return seats;
}

function addPassenger(seats, name) {
	seats.push(name);
	return seats;
}

function deletePassengerByName(seats, name){
	const index = seats.indexOf(name);
	return deletePassengerByIndex(index);
}

function deletePassengerByIndex(seats, index){
	if (index > -1) {
    seats.splice(index, 1);
	}
	return seats;
}

function deletePassengerBySeatNumber(seats, seatNumber){
	const index = seatNumber -1;
	return deletePassengerByIndex(index);
}
```


**10 -** La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
var seats = [
	'Alicia Gutierrez',
	'Alfonso Gómez',
	'Luis Navarro',
	'Óscar Garcia',
	'Andrés Fernández',
	'Lucía Mellado'
];

function printPassengers(seats){
	for (var i = 0; i < seats.length; i++) {
		console.log('El pasajero ' + seats[i] + ' tiene reservado el asiento ' + (i+1));
	}

	return seats;
}

function addPassenger(seats, name) {
	seats.push(name);
	return seats;
}

function deletePassengerByName(seats, name){
	const index = seats.indexOf(name);
	return deletePassengerByIndex(index);
}

function deletePassengerByIndex(seats, index){
	if (index > -1) {
    delete seats[index];
	}
	return seats;
}

function deletePassengerBySeatNumber(seats, seatNumber){
	const index = seatNumber -1;
	return deletePassengerByIndex(index);
}
```


**11 -** Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas.

Nuestra misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán,
Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

*Nota: Intenta utilizar Closures*

Info:
	- Tetuán (12)
  - Moncloa (19)
  - Hortaleza (21)

```javascript
var seats = [
	'Alicia Gutierrez',
	'Alfonso Gómez',
	'Luis Navarro',
	'Óscar Garcia',
	'Andrés Fernández',
	'Lucía Mellado'
];

function printPassengers(seats){
	for (var i = 0; i < seats.length; i++) {
		console.log('El pasajero ' + seats[i] + ' tiene reservado el asiento ' + (i+1));
	}

	return seats;
}

function addPassenger(seats, name) {
	seats.push(name);
	return seats;
}

function deletePassengerByName(seats, name){
	const index = seats.indexOf(name);
	return deletePassengerByIndex(index);
}

function deletePassengerByIndex(seats, index){
	if (index > -1) {
    delete seats[index];
	}
	return seats;
}

function deletePassengerBySeatNumber(seats, seatNumber){
	const index = seatNumber -1;
	return deletePassengerByIndex(index);
}

function getWarnings(delays){
	let warnings = ""
	Object.keys(delays).map(function(station, index) {
    var time = delays[station];
    warnings += "Por obras, la estación " + station + " tardará "
		+ time + "minutos.\n";
	});
	return warnings;
}

function printPassengerWarning(delays){
	const warnings = getWarnings(delays);

	return function (name, seat){
		console.log('Pasajero ' + name + ', asiento ' + seat + '.\nAVISOS:\n'+ warnings);
	}
}

function printPassengersTickets(seats){

	const delays = {
		Tetuan: 12,
		Moncola: 19,
		Hortaleza: 21
	}

	const printPassengerTicket = printPassengerWarning(delays);

	for (var i = 0; i < seats.length; i++) {
		printPassengerTicket(seats[i], i+1);
	}
}
```