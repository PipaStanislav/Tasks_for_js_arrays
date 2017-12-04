var Push = function foo (){
	console.log(arr);
	var arr = [];
	var index = [];
	for (var i = 0; i <= 20; i++){
		arr[i] = Math.floor(Math.random () * 20 - 10);
	}
	var minNumber = Math.min.apply( Math, arr );
	for (var j = 0; j < arr.length; j++){
		console.log (j);
		if (minNumber == arr[j]){
			index.push([j]);
		}
	}
	var Lastindex = index[index.length - 1]


	document.write ( "The second variant of the solution"
		,"<br>" + arr
		,'<br>' + "Min. number " + minNumber
		,'<br>' + "Index number " + index
		,'<br>' + "Last index number " + Lastindex
 		,'<br>'
		);
	;
	return [arr];
}