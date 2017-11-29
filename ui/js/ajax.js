(function(){
	$.getJSON("/js/contents.json", function( data ){
		$.each(data, function(index, value){
			
		});
	});
})();


function rot13(str) { 
	var temp = str.toUpperCase().split('').map(function(n){
		var char = n.charCodeAt(0),
				temp; 
		if ( char < 65 || char > 90) {
			return char;
		}
		else {
			return ( char <= 77 ) ? char + 13 : char - 13;
		}
	}).map(function(n){
		return String.fromCharCode(n)
	}).join('');
	return temp;
}