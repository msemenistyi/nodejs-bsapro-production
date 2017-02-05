const http = require('http');
const fs = require('fs');

function factorial(num){
	var rval = 1;
	for (var i = 2; i <= num; i++)
		rval = rval * i;
	return rval;
}

http.createServer((req, res) => {

	res.writeHead(200);

	if (req.url === '/'){
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/factorial'){
		for (i = 1; i < 50000000; i++){
			var a = factorial(100);
		}
		res.end(a.toString());
	} else {
		res.end();
	}
}).listen(7000);