var arrX = [];
var arrY = []; 
for ( var i = 0; i <= 10; i++ ){
	arrX[i] = Math.floor(Math.random () * 20);
	arrY[i] = Math.floor(Math.random () * 20);
}
var result = [];
var Push = foo;
function foo (){
	console.log (""
		,"\n\t ArrX", arrX
		,"\n\t ArrY", arrY
		,"\n\t Result", result
		);
	for (var i=0; i<arrX.length; i++){
		for (var j=0; j<arrY.length; j++){
			if(arrX[i] == arrY[j]) {
				var unique = true;
				for (var k = 0; k < result.length; k++ ){
					if (result[k] == arrX[i]){
						var unique = false;
					}
				}
				if (unique){
					result.push(arrX[i]);
				}
			}   
		}
	}
	document.write ( "The first variant of the solution"
		,"<br> ArrX: " + arrX
		,"<br> ArrY: " + arrY
		,'<br> Result: ' + result
		,'<br>'
		);
	return [result, arrX, arrY];
}


