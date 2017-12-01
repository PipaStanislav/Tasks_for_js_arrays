function foo (){
	var x = [1,2,3,4,2,2,3,3,5,6,7,8,9,10,3,2,];
	var result = [];
	console.log (x, result); 
	for ( var i = 0; i < x.length; i++ ){
		for ( var j = i-1; j >= 0; j-- ){
			if ( x[j] == x[i]) {
				result.push(x[i]);
				result.sort();
				break;
			}
		}
	}
	document.write ( "The second variant of the solution"
		,"<br>" + x
		,"<br>" + "Result " + result
		,'<br>'
		,'<br>'
		);
	return [x, result];
}

// не выводит первое значение с которым сравнивает //