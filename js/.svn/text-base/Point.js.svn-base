
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
};

function Point(xValue,yValue)
{
	this.attributes = {
		latitude : parseFloat(xValue),
		longitude : parseFloat(yValue),
		R : 6371,
		distance : 0
	}
}
Point.prototype.set = function (key, value) {
    this.attributes[key] = value;
    return this;
};
Point.prototype.get = function (propKey) {
    return this.attributes[propKey];
};
Point.prototype.distance = function(p) 
{
	var lat1 = this.get('latitude');
	var lat2 = parseFloat(p.latitude);
	var lon1 = this.get('longitude');
	var lon2 = parseFloat(p.longitude);
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	this.set('distance',this.get('R') * c);
	return this;
}
