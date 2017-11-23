function initializeProject() {

  fetch("http://ip-api.com/json").then(res => res.json()).then(function(usersLocation) {
    var mapper = new GoogleMapGenerator(usersLocation);
    var markersList = MapMarkerList();

    var map = mapper.initMap();

    var getTopFiveplaces = function(results, map, markersList) {
      for (var i = 0; i < results.length && i < 5; i++) {
        var marker = new MapMarker(map, results[i].geometry.location);
        markersList.addMarkerToList(marker);
      };
    };


    document.getElementById('submit').addEventListener('click', function() {
      markersList.clearAllMarkersFromMap();
      var geocoder = new GeoCoder(map);
      var address1 = document.getElementById('address1').value;
      var address2 = document.getElementById('address2').value;
      var cafe = document.getElementById('cafe');
      var restaurant = document.getElementById('restaurant');
      var bar = document.getElementById('bar');
      var address1Points = geocoder.setMarker(address1, markersList);
      var address2Points = geocoder.setMarker(address2, markersList);



      geocoder.calculateMiddlePoint(address1, address2)
        .then(function(midpoint) {
          console.log(midpoint, "in eventlistener");
          map.setCenter(new google.maps.LatLng(parseFloat(midpoint[0]), parseFloat(midpoint[1])));
          map.setZoom(15);
          PlaceSearcher(map, midpoint, new Filters().getTypeOfPlace(cafe, restaurant, bar)).then(function(results) {
              console.log("in Placesearcher promise", results);
              getTopFiveplaces(results, map, markersList);

            })

            .catch(function(status) {
              alert(status);
            });
        }).catch(function(status) {
          alert(status);
        });
    });
  });
}
