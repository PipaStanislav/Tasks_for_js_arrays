	function foo (){
		var x = [1,2,3,4,5,6,7,8,9,10];
		var y = 0;
		var result = 0;
		for (var i =0; i < x.length; i++){
			console.log (i);
			y = y + (x[i]);
			result = y / x.length;
	}
	document.write ( "The first variant of the solution"
		,"<br>" + y
		,"<br>" + "Result " + result
		,'<br>'
		,'<br>'
		);
	return x, y , result;
}
