(function (exports) {
  exports.MapMarkerList = function () {
    var _markersList = []

    addMarkerToList = function(marker){
      _markersList.push(marker);
    }

    clearAllMarkersFromMap = function(){
      for(var i=0; i<_markersList.length; i++){
        _markersList[i].destroyMarker();
      }
      _markersList = []
    }

    return {addMarkerToList:addMarkerToList,
            clearAllMarkersFromMap:clearAllMarkersFromMap}
  }
})(this)





// marker = new MapMarker(map, location);
// markerList.addMarkerToList(marker);
