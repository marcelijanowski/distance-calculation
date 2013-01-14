
var d = new Date();
var n = d.getMilliseconds(); 

for (var i = 0; i < locations.length; i++) {
	var distances = [];
	
	for( var j = 0;j < points.length;j++) {
		point = new Point(points[j].latitude,points[j].longitude);
		distances.push(point.distance(locations[i]));
	}
	distances.sort(function (a,b) { return a.get('distance')-b.get('distance')});
};
var d = new Date();
var diff = d.getMilliseconds()-n;



