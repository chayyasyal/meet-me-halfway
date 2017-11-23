var distance = require ('google-distance-matrix');
var origins = [51.55,-0.05];
var destinations = [51.5608,-0.1631];

distance.key('AIzaSyD1TAG2NAvTTNz8MZRq5s8AeUp9JwurQYs');
distance.units('imperial');
distance.matrix(origins, destinations);
