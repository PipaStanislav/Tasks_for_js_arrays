var Push = function foo (){
	console.log(arr);
	var arr = [];
	var result = [];
	for (var i = 0; i <= 20; i++){
		arr[i] = Math.floor (Math.random () * 20 - 10);
	}
	for (var j = 0; j < arr.length; j++ ){
		if (arr [j] >= 0){
			result.push(arr[j])
		}
	}
	document.write ( "The second variant of the solution"
		,"<br>" + arr
		,"<br>" + "Result " + result
		,'<br>'
		,'<br>'
		);
	;
	return [arr, result];
}
