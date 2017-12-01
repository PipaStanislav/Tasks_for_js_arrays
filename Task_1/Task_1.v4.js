function foo (arr) {
	var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var result = [];
	for (var i = x.length; i >= 0; i--) {
		console.log (i);
			if (i < x.length){
				result.push (x[i]);
			}
		}
	document.write ( "The fourth variant of the solution"
		,"<br>" + x
		,"<br>" + "Result " + result
		,'<br>'
		,'<br>'
	);
	return [x, result];
}