// 1 - Utiliza Google Maps para posicionar al usuario.

getUserPosition = function() {

  navigator.geolocation.getCurrentPosition(function(position) {

    var latitude = position.coords.latitude,
        longitude = position.coords.longitude;

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: parseFloat(latitude), lng:parseFloat(longitude)},
      zoom: 14
    });

    var marker = new google.maps.Marker({
      position: {lat: latitude, lng: longitude},
      map: map,
      title: '¡Estás aquí!'
    });

    document.getElementById('longitude').textContent = longitude;
    document.getElementById('latitude').textContent = latitude;

  })

}
