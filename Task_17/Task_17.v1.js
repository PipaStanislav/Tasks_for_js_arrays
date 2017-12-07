var arr = [];
for ( var i = 0; i < 20; i++ ){
	arr[i] = Math.floor(Math.random () * 20 );
}
function sortAscending(i, ii) {
	if (i > ii)
		return 1;
	else if (i < ii)
		return -1;
	else
		return 0;
}
var arr1 = arr.sort(sortAscending);
var result = [];
var Push = foo;
function foo (){
	console.log (arr1, result)
	for (var i = 0; i < arr1.length; i++){
		for (var j = 0; j < arr1.length; j++){
			if (arr1[i] == arr1[j]){
				var unique = true;
				for (var k = 0; k < result.length; k++){
					if (result[k] == arr1[i]){
						var unique = false;
					}
				}
				if (unique) {
					result.push(arr1[i]);
				}
			}
		}
	}
	document.write ( "The first variant of the solution"
		,"<br>" + "Array" + arr1
		,"<br>" + "Array with different elements " + result
		,'<br>' + "Number of unique elements " + result.length
		);
	return [result, arr1];
}