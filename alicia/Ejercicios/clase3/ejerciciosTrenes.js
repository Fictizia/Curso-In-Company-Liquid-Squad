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
		if(seats[i] !== undefined){
		  console.log('El pasajero ' + seats[i] + ' tiene reservado el asiento ' + (i+1));
		}
	}

	return seats;
}

function addPassenger(seats, name) {
	let added = false;
	for (var i = 0; i < seats.length; i++) {
		if(seats[i] === undefined){
			seats[i] = name;
			added = true;
			continue;
		}
	}
	if(!added){
		seats.push(name);
	}
	return seats;
}

function deletePassengerByName(seats, name){
	const index = seats.indexOf(name);
	return deletePassengerByIndex(index);
}

function deletePassengerByIndex(seats, index){
	if (index >= 0 && index < seats.length) {
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
		if(seats[i] !== undefined){
			printPassengerTicket(seats[i], i+1);
		}
	}
}