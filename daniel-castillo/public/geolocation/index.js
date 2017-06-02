
// 1 - Utiliza Google Maps para posicionar al usuario.

getUserPosition = function() {

  var longContainer = document.getElementById('longitude'),
      latContainer = document.getElementById('latitude'),
      errorContainer = document.getElementById('error');

  if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(function(position) {

      var latitude = position.coords.latitude,
          longitude = position.coords.longitude;

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 14
      });

      var marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        title: 'You are here!'
      });

      longContainer.textContent = 'longitude: ' + longitude;
      latContainer.textContent = 'latitude: ' + latitude;

    })
  } else {
      errorContainer.textContent = 'Geolocation not supported';
  }

}


// 2 - Posiciona todos los vehículos de transporte (trenes y autobuses) de Los Angeles en el mapa.

// Información sobre la API de Metro.net
// Utiliza un esquema de color personalizado
// Snazzy, alternativa al sistema de estilos de Google Maps
// Utiliza Google Maps con un API Token
// Puedes utilizar Cluster de Google Maps

// http://api.metro.net/agencies/lametro/vehicles/

