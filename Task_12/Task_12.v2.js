var arr = [];
for ( var i = 0; i <= 10; i++ ){
	arr[i] = Math.floor(Math.random () * 20);
}
var result = [];
var x = [];
var Push = foo;
function foo (){
	console.log (arr, x, result, );
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<arr.length; j++){
			if(arr[i]===arr[j] && j!=i) {
				var unique = true;
				for (var k = 0; k < x.length; k++ ){
					if (x[k] == arr[i]){
						var unique = false;
					}
				}
				if (unique){
					x.push(arr[i]);
				}
			}   
		}
	}
	for (var m = 0; m < arr.length; m++){
		for (var l = 0; l < x.length; l++){
			if (x[l] === arr[m]){
				result.push(arr[m]);
				result.sort();
			}
		}
	}
	document.write ( "The second variant of the solution"
		,"<br>" + arr
		,"<br>" + "Result " + x
		,'<br>' + "Result oll repeat numbers " + result
		,'<br>'
		);
	return [x, result, arr];
}


