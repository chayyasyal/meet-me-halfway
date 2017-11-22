(function (exports) {
  
    exports.GoogleMapGenerator = function (currentLocation) {
      var _currentLocation = currentLocation;
  
      //takes the current location from an api call to ip-api.com
      initMap = function () {
        return new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {
            lat: _currentLocation["lat"],
            lng: _currentLocation["lon"]
          }
        });
      }
  
      setLocation = function (location) {
        _currentLocation = location;
      }
  
  
      return {
        initMap: initMap,
        setLocation: setLocation
  
      };
    };
  })(this);
  