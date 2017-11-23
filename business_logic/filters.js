(function(exports) {
  exports.Filters = function() {

    getTypeOfPlace = function(cafe, restaurant, bar) {
      var typeOfPlace;

      if (cafe.checked) {
        typeOfPlace = 'cafe';
      } else if (restaurant.checked) {
        typeOfPlace = 'restaurant';
      } else {
        typeOfPlace = 'bar';
      }
      return typeOfPlace;
    }

    return {
      getTypeOfPlace: getTypeOfPlace
    };
  }
})(this);
