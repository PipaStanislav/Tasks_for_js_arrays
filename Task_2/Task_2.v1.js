function foo (){
	var x = [1,2,3,4,2,2,3,3,5,6,7,8,9,10];
	var result = [];
	console.log (result, x);
	for ( var i = 0; i < x.length; i++ ){
		for ( var j = i - 1; j >= 0; j-- ){
			if (x[j] == x[i]) {
				var unique = true;
				for ( var k = 0; k < result.length; k++ ){
					if (result [k] == x[i]) {
						var unique = false;
						break;
					}
				}
				if (unique) {
					result.push(x[i]);
				}
				break;
			}
		}
	}
	document.write ( "The first variant of the solution"
		,"<br>" + x
		,"<br>" + "Result " + result
		,"<br>"
		,"<br>"
		);
	return [x, result];
}
