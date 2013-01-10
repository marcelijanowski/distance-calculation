
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
};

function Point(xValue,yValue)
{
	this.attributes = {
		x : xValue,
		y : yValue
		R : 6371
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
	var lat1 = this.x;
	var lat2 = p.x;
	var lon1 = this.y;
	var lon2 = p.y;
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	return this.R * c;
}
