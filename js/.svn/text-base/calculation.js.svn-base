

for (var i = 0; i < locations.length; i++) {
	var distances = [];
	var data = [];
	for( var j = 0;j < points.length;j++) {
		data.push(points[j]);
		point = new Point(locations[i].latitude,locations[i].latitude);
		distances.push(point.distance(points[j]));
	}
	distances.sort(function (a,b) { return a.get('distance')-b.get('distance')});
	var listElement = document.getElementById('pointListing');
	var string = '';
	for(var j = 0 ; j < 30 ; j++) {
		string += '<tr>'+
				   '<td>'+distances[j].get('distance')+'</td>'+
				   '</tr>';

	}
	var header = '<tr><th>Distance from point</th></tr>';
	string = '<table>'+header+string+'</table>';
	listElement.innerHTML = string;
};
