var Push = function foo (){
	console.log(arr);
	var arr = [1,2,-3,-4,5,6,-7,-8,9,10];
	var result = [];
	for (var j = 0; j < arr.length; j++ ){
		if (arr [j] >= 0){
			result.push(arr[j])
		}
	}
	document.write ( "The first variant of the solution"
		,"<br>" + arr
		,"<br>" + "Result " + result
		,'<br>'
		,'<br>'
		);
	;
	return [arr, result];
}
