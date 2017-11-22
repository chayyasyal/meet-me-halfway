(function (exports) {
  exports.GeoCoder = function (map) {
    var _geoCoder = new google.maps.Geocoder();
    var _map = map;

    returnLatLon = function (address) {
      return new Promise(function (resolve, reject) {
        _geoCoder.geocode({
          'address': address
        }, function (results, status) {
          if (status === 'OK') {
            console.log("in return lat", typeof results[0].geometry.location.lat())
            resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);

          } else {
            alert('Geocode was not successful. Could not return latitude for the following reason: ' + status);
            reject();
          }
        });
      });
    }


    setMarker = function (address) {
      _geoCoder.geocode({
        'address': address
      }, function (results, status) {
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: _map,
            position: results[0].geometry.location
          });
          _map.setCenter(results[0].geometry.location);
          
          return [results[0].geometry.location.lat(), results[0].geometry.location.lng()]
        } else {
          alert('Geocode was not successful.Could not set marker for the following reason: ' + status);
        }
      });
    }

    _fetchMiddlePointLatLon = function (address1, address2) {
      var address1LatLon = returnLatLon(address1);
      var address2LatLon = returnLatLon(address2);

      console.log("fetch", [address1LatLon, address2LatLon])
      return [address1LatLon, address2LatLon];

    }

    calculateMiddlePoint =  function (address1, address2) {
      return new Promise( function(resolve, reject) {
     returnLatLon(address1).then(function (add1latlon) {
        console.log(add1latlon);
        return add1latlon
      }).then(function (add1latlon) {
        returnLatLon(address2).then(function (add2latlon) {
          return [add2latlon, add1latlon];
        }).then(function (points) {
          console.log("in promise", [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2]);
          var midpoint = [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2]
          resolve(midpoint)
        });

      }); });
    }


    setCenterTo = function (address) {
      _geoCoder.geocode({
        'address': address
      }, function (results, status) {
        if (status === 'OK') {
          _map.setCenter(results[0].geometry.location);
        } else {
          alert('Geocode was not successful. Could not set center for the following reason: ' + status);
        }
      });
    }



    return {
      returnLatLon: returnLatLon,
      setMarker: setMarker,
      calculateMiddlePoint: calculateMiddlePoint,
      setCenterTo: setCenterTo
    }
  };

})(this);

// halfWayPointLat += results[0].geometry.location.lat() / 2; //lat
// halfWayPointLon += results[0].geometry.location.lng() / 2; //lon