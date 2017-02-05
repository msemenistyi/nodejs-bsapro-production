const http = require('http');
const fs = require('fs');
const child_process = require('child_process');

http.createServer((req, res) => {

	res.writeHead(200);

	if (req.url === '/'){
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/factorial'){
		var child = child_process.fork(__dirname + '/factorial.js');
		child.on('message', (result) => {
			res.end(result.factorial.toString());
		})
	} else {
		res.end();
	}
}).listen(7000);