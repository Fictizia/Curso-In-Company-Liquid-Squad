var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
  var numeroTren = 1;
  for (var i = 0; i < totalTrenes; i++) {
	  console.log("El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado"));
  }
};