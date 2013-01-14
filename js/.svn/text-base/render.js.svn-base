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

	var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
if(battery) {
	listElement + 'Battery %'+battery.level * 100 + " %";
}