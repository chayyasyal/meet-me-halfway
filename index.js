function initializeProject() {

  fetch("http://ip-api.com/json").then(res => res.json()).then(function(usersLocation) {
    var mapper = new GoogleMapGenerator(usersLocation);

    var map = mapper.initMap();


    document.getElementById('submit').addEventListener('click', function() {
      var geocoder = new GeoCoder(map);
      var address1 = document.getElementById('address1').value;
      var address2 = document.getElementById('address2').value;
      var address1Points = geocoder.setMarker(address1);
      var address2Points = geocoder.setMarker(address2);

      geocoder.calculateMiddlePoint(address1, address2)
        .then(function(midpoint) {
          console.log(midpoint, "in eventlistener")
          PlaceSearcher(map, midpoint).then(function(results) {
              console.log("in promise2222", results);
              console.log("in promise length", results.length)

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
