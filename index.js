function initializeProject() {

  fetch("http://ip-api.com/json").then(res => res.json()).then(function(usersLocation) {
    var mapper = new GoogleMapGenerator(usersLocation);
    var markersList = MapMarkerList();

    var map = mapper.initMap();


    document.getElementById('submit').addEventListener('click', function() {
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
          console.log(midpoint, "in eventlistener")
          PlaceSearcher(map, midpoint, new Filters().getTypeOfPlace(cafe, restaurant, bar)).then(function(results) {
              console.log("in Placesearcher promise", results);
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
//       then(function(potPlaces){
//         console.log("a list of potential places");
//           console.log(potPlaces);
//           console.log(potPlaces.length, "length")
//           for (var i=0; i<potPlaces.length; i++){
//             console.log(potPlaces[i].geometry.location.lat());
//           }
//       })
//
//     });
//
//   }).catch(err => {
//     throw err
//   });
//
// }
