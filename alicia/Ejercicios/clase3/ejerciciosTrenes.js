var seats = 5;
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


// Arrays

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
	if (index > -1) {
    seats.splice(index, 1);
	}
	return seats;
}