

for (var i = 0; i < locations.length; i++) {
	var distances = [];
	for( var j = 0;j < points.length;j++) {
		point = new Point(locations[i].latitude,locations[i].latitude);
		distances.push(point.distance(points[j]));
	}
	distances.sort(function (a,b) { return a.get('distance')-b.get('distance')})
};
