var STRINGS = (function () {

	function isNumeric(n) {
  		return !isNaN(parseFloat(n)) && isFinite(n);
	}


	function camelizeCSS(str){
		var words = str.split('-');
		for(var i = 1; i < words.length; i++){
			words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
		}
		return words.join('');
	}

	function filterNumericInPlace(arr){
		for(var i = 0; i < arr.length; i++){
			if(isNumeric(arr[i]) != true ) {
				arr.splice(i, 1);
			}
		}
		return arr;
	}

	function removeClass(obj, str){
		var val = obj.className.split(' ');
		for(var i = 0; i < val.length; i++){
			if(val[i] == str){
				val.splice(i, 1);
			}
		}
		return obj.className = val.join(' ')
	}
	

	return {
		css: camelizeCSS,
		rmvClass: removeClass
	}


}());