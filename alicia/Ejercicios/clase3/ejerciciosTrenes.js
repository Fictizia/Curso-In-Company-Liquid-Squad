var trenesOperativos = 3;
var totalTrenes = 10;

function estadoDetalle () {
  for (var i = 1; i <= totalTrenes; i++) {
	  let extraInfo = "";
	  if (i === 10){
		  extraInfo += ". Info: servicio nocturno";
	  }
	  let info = "El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado");
	  console.log(info + extraInfo);
  }
};