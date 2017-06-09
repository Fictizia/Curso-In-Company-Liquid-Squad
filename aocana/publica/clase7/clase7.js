
function cargarDatos(){

  var myWebSocket = new WebSocket("ws://ws.blockchain.info/inv");

  var cadenaBTC=0,
    cadenaValores="",
    cadenaTransferencias="transferencias";


      var url = "https://blockchain.info/es/ticker?cors=true";

      var xmlHttp = new XMLHttpRequest();

  myWebSocket.onopen = function() {
    console.log("Connection open ...");
    myWebSocket.send(JSON.stringify({"op":"unconfirmed_sub"}));
    myWebSocket.send(JSON.stringify({"op":"blocks_sub"}));
  };



  myWebSocket.onmessage = function(evt) {
    var response = JSON.parse(evt.data);
    var cantidad = 0;
    var calCantidad = 0;

    if (response.op === "utx"){
      for (var i=0;i<response.x.out.length;i++){
        calCantidad += calCantidad+response.x.out[i].value;
      }

	     cantidad = calCantidad / 100000000;cadenaBTC += cantidad;
     }
    //cadenaBTC += cantidad;

    document.getElementById("transferidos").innerText = cadenaBTC;

    //se actualiza cada 15 minutos hacerlo en un interval, para el ejemplo mejor una vez y fuera
    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
            var result = JSON.parse(xmlHttp.responseText);

            for (var element in result){
              cadenaValores += element + " (S) " + result[element].sell + " (B) " + result[element].buy + " | ";
            }
            document.getElementById("valores").innerText = cadenaValores;
            //document.getElementById('resultado').innerText = result.weather[0].description;
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };

    xmlHttp.open("GET", url, true);
    // Modificación de cabeceras
    xmlHttp.send();


    //document.getElementById("transferencias").innerText = cadenaTransferencias;

    //console.log( "Received Message: ", evt.data);
  };








}
