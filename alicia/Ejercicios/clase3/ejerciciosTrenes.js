    var trenesOperativos = 3;
    var totalTrenes = 8;

    function estadoDetalle () {
    	var numeroTren = 1;
    	while(numeroTren <= totalTrenes) {
    		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    		numeroTren++
    	};
    };