
(function (exports) {
  exports.PlaceSearcher = function(map, midpoint, type = 'cafe'){
    console.log(midpoint[0]+','+midpoint[1]+"  in placesearcher ");
    var myLatlng = new google.maps.LatLng(parseFloat(midpoint[0]),parseFloat(midpoint[1]));
    
    var _request = {
        location: myLatlng,
        radius: '500',
        type: ['cafe']
      };

      var _places = [];

      
      _callback = function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            _places.push(results[i]);
          }
        }
      }

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(_request, _callback);
      
      returnPlaces = function(){
        return _places;
      }


      return {returnPlaces:returnPlaces}
    }

})(this);