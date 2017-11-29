function Slider() {
	this.imgsLen = $('.slider li').length;
	this.imgWidth = $('.slider li').width();
	this.totalImgsWidth = this.imgsLen * this.imgWidth;
	this.current = 0;
}

Slider.prototype.setCurrent = function(dir) {
	this.current = ( dir === 'next' ) ? ++this.current : --this.current;
	if ( this.current === this.imgsLen) {
		this.current = 0;
	} else if ( this.current  < 0 ) {
		this.current = this.imgsLen - 1;
	}
	return this.current;
}

Slider.prototype.transition = function(container, counter) {
	$(container).animate({
		'margin-left': -(counter * this.imgWidth)
	});
}

var slider = new Slider();