var arr = [];
for ( var i = 0; i <= 5; i++ ){
	arr[i] = Math.floor(Math.random () * 20);
}
var x = 0;
var y = [];
var Push = foo;
function foo (){
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<arr.length; j++){
			if(arr[i]===arr[j] && j!=i) {
				x++;
			}   
		}
	}
	if (x == 0){
		document.write ("The first variant of the solution"
			,"<br>" + arr
			,"<br>" + true
			,"<br>" 
			);
	}
	if (x > 0){
		document.write ("The first variant of the solution"
			,"<br>" + arr
			,"<br>" + false
			,"<br>" 
			)
	}
}
