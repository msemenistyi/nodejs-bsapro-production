for (i = 1; i < 50000000; i++){
	var result = factorial(100);
}
process.send({ factorial: result });

function factorial(num)
{
	var rval = 1;
	for (var i = 2; i <= num; i++)
		rval = rval * i;
	return rval;
}