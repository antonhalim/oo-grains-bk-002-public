'use strict';

var Grains = function(){
};


Grains.prototype.square = function (number) {
	var result = 1;
	for(var i = 1; i < number; i++){
		result *= 2
	}
	return result
};

Grains.prototype.total = function (number) {
	var total = 0, that = this;
	for(var i = 1; i <= number; i++){
		total += that.square(i)
	}
	return total
};
