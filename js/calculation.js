

for (var i = 0; i < locations.length; i++) {
	var distances = [];
	
	for( var j = 0;j < points.length;j++) {
		point = new Point(points[j].latitude,points[j].longitude);
		distances.push(point.distance(locations[i]));
	}
	distances.sort(function (a,b) { return a.get('distance')-b.get('distance')});
	var listElement = document.getElementById('pointListing');
	var string = '';
	for(var j = 0 ; j < 20 ; j++) {
		string += '<tr>'+
				   '<td>'+distances[j].get('latitude')+'</td>'+
				   '<td>'+distances[j].get('longitude')+'</td>'+
				   '<td>'+distances[j].get('distance')+'</td>'+
				   '</tr>';

	}
	var header = '<tr><th>Langitude</th><th>Longitude</th><th>Distance (km)</th></tr>';
	string = '<table>'+header+string+'</table>';
	listElement.innerHTML = string;
};
