function foo (){
	var x = [1,2,3,4,2,2,3,3,5,6,7,8,9,10,3,2,];
	var result = [];
	var res = [];
	console.log (x, result, res); 
	for ( var i = 0; i <= x.length; i++ ){
		for ( var j = i-1; j >= 0; j-- ){
			if ( x[j] == x[i]) {
				var namberUnique = true;
				for ( var m = 0; m <= result.length; m++){
					if (result[m] == x[i]){
						namberUnique = false;
					}
				}
				if (namberUnique) {
					result.push(x[i]);
				}
			}
		}
	}
	for ( var r = 0; r < x.length; r++){
		for ( var l = 0; l < result.length; l++){
			if (result[l] === x[r]){
				res.push(x[r]);
				res.sort();
			}
		}
	}
	document.write ( "The third variant of the solution"
		,"<br>" + x
		,"<br>" + "Result " + result
		,'<br>' + "Result oll repeat numbers " + res
		,'<br>'
		);
	return [x, result, res];
}

