var arr1 = [];
var arr2 = [];
for ( var i = 0; i < 20; i++ ){
	arr1[i] = Math.floor(Math.random () * 20 );
	arr2[i] = Math.floor(Math.random () * 20 );
}
var arr3 = arr1.concat(arr2);
function sortAscending(i, ii) {
	if (i > ii)
		return 1;
	else if (i < ii)
		return -1;
	else
		return 0;
}
var arr4 = arr3.sort(sortAscending);
var res = [];
var Push = foo;
function foo (){
	console.log (arr4, res)
	for (var i = 0; i < arr4.length; i++){
		for (var j = 0; j < arr4.length; j++){
			if (arr4[i] == arr4[j]){
				var unique = true;
				for (var k = 0; k < res.length; k++){
					if (res[k] == arr4[i]){
						var unique = false;
					}
				}
				if (unique) {
					res.push(arr4[i]);
				}
			}
		}
	}
	document.write ( "The first variant of the solution"
		,"<br>" + "Array №1 " + arr1
		,"<br>" + "Array №2 " + arr2						
		,"<br>" + "combined and ordered array " + arr4
		,"<br>" + "Array with different elements " + res
		,'<br>'
		);
	return [res, arr4];
}