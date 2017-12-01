function foo (){
		var x = [1,2,3,4,5,6,7,8,9,10]
    return Math.min.apply( Math, x );
};
result = foo();
document.write( 'The second variant of the solution'
	,'<br>' + "Result " + result
	);