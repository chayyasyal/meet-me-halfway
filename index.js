function initializeProject() {
  
  fetch("http://ip-api.com/json").then(res => res.json()).then(function(usersLocation){
    var mapper = new GoogleMapGenerator(usersLocation);
      
    var map = mapper.initMap();
 

      document.getElementById('submit').addEventListener('click', function () {  
        var geocoder = new GeoCoder(map);
        var address1 = document.getElementById('address1').value;
        var address2 = document.getElementById('address2').value;
        var address1Points = geocoder.setMarker(address1);
        var ddress2Points = geocoder.setMarker(address2);
        
        geocoder.calculateMiddlePoint(address1, address2).then(function(midpoint){
          console.log(midpoint, "in eventlistener")
          //for debuging only
          geocoder.setMarker(midpoint[0]+','+midpoint[1]);
          //for debuging only

        })

      });
  
    }).catch(err => {
      throw err
    });
  
  }
