/* EJERCICIOS

Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. 
Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript


1 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando while.
*/
    var trenesOperativos = 3;
    var totalTrenes = 8;

    function estadoDetalle () {
    	var numeroTren = 1;
    	while(numeroTren <= totalTrenes) {
    		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));	
    		numeroTren++
    	};
    };



/* 2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando Do... While. */
    var trenesOperativos = 3;
    var totalTrenes = 8;

    function estadoDetalle () {
    	var numeroTren = 1
    	do {console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
        numeroTren++
      }while (numeroTren <= totalTrenes)

    };



/* 3 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando for. */

var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
	var numeroTren = 1;
	for(i = 1; i< totalTrenes + 1; i++) {
		console.log('el tren ' + i + ' está  ' +  (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
		numeroTren++
	}
}

/* 4 - #compliquemos! Servicio nocturno en el tren 10. 
Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del tren 10 se especifique que es nocturno. 
Independientemente de si esta parado o funcionando. */

var trenesOperativos = 3;
var totalTrenes = 10;

function estadoDetalle () {
	var numeroTren = 1;
	for (i=1; i <= totalTrenes + 1; i++) {
    if(numeroTren === 10) {
      i = "10 nocturno"
    }
    console.log('el tren ' + i + ' está  ' +  (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
    numeroTren++
	}
}

/* 5 - ¡Refactoricemos! ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.*/

// Todos los trenes operativos
var trenesOperativos = 10;
var totalTrenes = 10;

function estadoDetalle () {
  if ((totalTrenes - trenesOperativos) === 0) {
    console.log('No hay ningún tren operativo')
  } else if ((totalTrenes - trenesOperativos) === totalTrenes) {
    console.log('Todos los trenes están operativos')
  } else {
  var numeroTren = 1;
    for (i=1; i <= totalTrenes + 1; i++) {
      console.log('el tren ' + i + ' está  ' +  (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
      numeroTren++
    }
  }
}


// Ningún tren operativo 

var trenesOperativos = 0;
var totalTrenes = 10;

function estadoDetalle () {
  if ((totalTrenes - trenesOperativos) === 0) {
    console.log('No hay ningún tren operativo')
  } else if ((totalTrenes - trenesOperativos) === totalTrenes) {
    console.log('Todos los trenes están operativos')
  } else {
  var numeroTren = 1;
    for (i=1; i <= totalTrenes + 1; i++) {
      console.log('el tren ' + i + ' está  ' +  (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
      numeroTren++
    }
  }
}




/* 6 - El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. 
El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.*/

var trenesOperativos = 4;
var totalTrenes = 12;

function estadoDetalle () {
  var numeroTren = 1;
  for (i=1; i <= totalTrenes + 1; i++) {
    if(numeroTren === 10 || numeroTren === 12) {
      var tipo = true;
    } else {
      var tipo = false;
    }

      console.log('el tren ' + i + (tipo?'nocturno':'') + ' está  ' +  (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
    
    numeroTren++
  }
}


/* 7 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados. 
El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados. 
Este tren será el número 13.
NOTA: EL TREN 13 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código */

var trenesOperativos = 4;
var totalTrenes = 13;

function estadoDetalle () {
  var numeroTren = 1;
  for (i=1; i <= totalTrenes + 1; i++) {
    if(numeroTren === 10 || numeroTren === 12) {
      var tipo = true;
    } else {
      var tipo = false;
    }

    if(numeroTren === 13) {
      var dia = true;
    } else {
      var dia = false;
    }
      console.log('el tren ' + i + (tipo?'nocturno':'') + (dia?' que opera los sábados':'') + ' está  ' +  (numeroTren <= trenesOperativos ? "funcionando" : "parado"))
    numeroTren++
  }
}




/* 8 - Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista y su número de asiento 
(basado en el orden del índice). Nota: El primer asiento del tren es el 1 y no el 0.*/

var pasajeros = ['Alicia Gutierrez', 'Alfonso Gomez', 'Luis Navarro', 'Oscar Garcia', 'Andres Fernandez', 'Lucia Mellado'];
var asientos = ['1', '2', '3', '4', '5', '6'];

// hacer un forEach
function listaPasajeros () {
  for (i = 0; i < pasajeros.length ; i++) {
      console.log('el pasajero ' + pasajeros[i] + ' tiene reservado el asiento ' + asientos[i])
  }
}



/* 9 - Necesitamos una función para agregar y otra para borrar pasajeros de la lista. Nota: Pensemos que a la larga pueden existir más listas.*/

// Añadir pasajero
var pasajeros = ['Alicia Gutierrez', 'Alfonso Gomez', 'Luis Navarro', 'Oscar Garcia', 'Andres Fernandez', 'Lucia Mellado'];
var nombre = 'Sara';

function addPassenger (nombre, pasajeros) {
  var updatedPasajeros = pasajeros.push(nombre);
  console.log('el nuevo array de pasajeros es ', updatedPasajeros);
}

// Borrar pasajero
var pasajeros = ['Alicia Gutierrez', 'Alfonso Gomez', 'Luis Navarro', 'Oscar Garcia', 'Andres Fernandez', 'Lucia Mellado'];
var nombre = 'Alicia Gutierrez';

function deletePassenger (nombre, pasajeros) {
  var index = pasajeros.indexOf(nombre);
  pasajeros.splice(index, 1);
  console.log('el nuevo array de pasajeros es ', pasajeros);
}



/* 10 - La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, 
pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula uno o varios billetes. 
Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*/





/* 11 - Una de las vías principales esta en obras. 
Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas. 
Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán, Moncloa y Hortaleza. 
Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

Nota: Intenta utilizar Closures

Info: 
- Tetuán (12)
- Moncloa (19)
- Hortaleza (21)
*/