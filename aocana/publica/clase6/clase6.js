const ow_key = "b579556f68511b6dfb60783019b3af36";

var ciudad = resultado.parameters.ciudad;
//se haría la llamada al webservice del tiempo


//mensaje.message.text = resultado.fulfillment.speech;

function buscartiempo(){
  var ciudad = document.getElementById('ciudad').value;

  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=" + ow_key;

  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {

      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          console.info(JSON.parse(xmlHttp.responseText));
          var result = JSON.parse(xmlHttp.responseText);
          document.getElementById('resultado').innerText = result.weather[0].description;
      } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
          console.error("ERROR! 404");
          console.info(JSON.parse(xmlHttp.responseText));
      }
  };
  xmlHttp.open("GET", url, true);
  // Modificación de cabeceras
  xmlHttp.send();
}
