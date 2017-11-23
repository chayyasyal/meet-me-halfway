(function (exports) {
  exports.MapMarker = function (map, location) {
    var _map = map;
    var _marker = new google.maps.Marker({
      map: _map,
      position: location
    });

    destroyMarker = function(){
      _marker.setMap(null)
    }

    return {destroyMarker:destroyMarker}
  }
})(this)