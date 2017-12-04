var Push = function foo (){
	console.log(arr);
	var arr = [];
	var index = [];
	for (var i = 0; i <= 20; i++){
		arr[i] = Math.floor(Math.random () * 20 - 10);
	}
	var minNumber = Math.max.apply( Math, arr );
	for (var j = 0; j < arr.length; j++){
		console.log (j);
		if (minNumber == arr[j]){
			index.push([j]);
		}
	}
	var Lastindex = index.concat();
	var x = Lastindex.shift(0);

	document.write ( "The first variant of the solution"
		,"<br>" + arr
		,'<br>' + "Max. number " + minNumber
		,'<br>' + "Index number " + index
		,'<br>' + "First index number " + x
 		,'<br>'
		);
	;
	return [arr];
}