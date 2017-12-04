var Push = function foo (){
	console.log(arr);
	var arr = [];
	var result = [];
	var resMinNumber = [];
	for (var i = 0; i <= 20; i++){
		arr[i] = Math.floor(Math.random () * 20 - 10);
	}
	for (var j = 0; j < arr.length; j++ ){
		if (arr [j] < 0){
			result.push(arr[j]);
		}
	}
	var minNumber = Math.min.apply( Math, result );
	for (var m = 0; m < result.length; m++){
		if (result[m] == minNumber){
			resMinNumber.push(result[m])
		}
	}
	document.write ( "The second variant of the solution"
		,"<br>" + arr
		,"<br>" + "Result " + result
		,'<br>' + "Min. number " + minNumber
		,'<br>' + "Result min number " + resMinNumber
		,'<br>'
		,'<br>'
		);
	;
	return [arr, result];
}