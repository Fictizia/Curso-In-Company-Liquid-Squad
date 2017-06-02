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
