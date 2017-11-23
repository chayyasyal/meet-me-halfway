(function(exports) {
  exports.PlaceSearcher = function(map, midpoint, types = 'cafe') {
    console.log(midpoint[0] + ',' + midpoint[1] + "  in placesearcher ");
    var myLatlng = new google.maps.LatLng(parseFloat(midpoint[0]), parseFloat(midpoint[1]));

    var _request = {
      location: myLatlng,
      radius: '500',
      type: types
    };

    return new Promise(function(resolve, reject) {
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(_request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
  }
})(this);
