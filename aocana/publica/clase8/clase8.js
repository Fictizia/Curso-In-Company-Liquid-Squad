const API_GOOGLE ="AIzaSyASUoKzrhyhsxexZpkrJecZLIfUODrqgIw";

var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;


function initialize() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var situation = {lat: position.coords.latitude, lng: position.coords.longitude};
      console.info("Latitud: " + position.coords.latitude + "\nLongitud: "+ position.coords.longitude);
      var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 12,
        center: situation
      });


      // Add a marker at the center of the map.
      addMarker(situation, map);
    });
  } else {
    console.warn("Geolocation no soportado :-( ");
  }


  //parte LA
  var url = "https://crossorigin.me/http://api.metro.net/agencies/lametro/vehicles/";

  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {

      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          console.info(JSON.parse(xmlHttp.responseText));
          var result = JSON.parse(xmlHttp.responseText);

            var situation = {lat: 34.052235, lng: -118.243683};

            var mapLA = new google.maps.Map(document.getElementById('mapaLA'), {
              zoom: 10,
              center: situation
            });

          var elementos = result.items;
          for (var i=0;i<elementos.length;i++){debugger;
            var pos = {lat:elementos[i].latitude,lng:elementos[i].longitude}
            addMarker(pos, mapLA);
          }
          //document.getElementById('resultado').innerText = result.weather[0].description;
      } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
          console.error("ERROR! 404");
          console.info(JSON.parse(xmlHttp.responseText));
      }
  };
  xmlHttp.open("GET", url, true);
  // Modificación de cabeceras
  xmlHttp.send();

  }

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}

//google.maps.event.addDomListener(window, 'load', initialize);
