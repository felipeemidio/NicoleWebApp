var fs = require("fs");
const request = require('request');
/*
	var dbConnection = require("./dbConnection");
	var client = dbConnection.getClient();
	var table = dbConnection.getQuery(client, "SELECT * FROM aluno");
	console.log("Nomes dos alunos:");
	for (var i = 0; i < table.length; ++i){
	var row = table[i];
	console.log(" " + row["nome"]);
}   
*/

function start(response, request) {
	// Mostra a tela home.
	console.log("Request handler 'start' was called.");
	loadFile(response, "Aluno.html");
}

function upload(response, request) {
	console.log("Request handler 'upload' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");
		/* Possible error on Windows systems:
		tried to rename to an already existing file */
		fs.rename(files.upload.path, "./tmp/test.png", function(error) {
			if(error) {
				fs.unlink("./tmp/test.png");
				fs.rename(files.upload.path, "./tmp/test.png");
			}
		});
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("./tmp/test.png").pipe(response);
}

function studentPage(response, request) {
	console.log("Request handler 'studenPage' was called.");
	loadFile(response, "AlunoScript.js");
}

function defaultCss(response, request) {
	console.log("Request handler 'defaultCss' was called.");
	loadFile(response, "defaultStyle.css");
}

function mainScript(response, request) {
	console.log("Request handler 'mainScript' was called.");
	loadFile(response, "main.js");
}

function loan(response, request) {
	console.log("Request handler 'Emprestimo' was called.");
	loadFile(response, "Emprestimo.html");
}

function book(response, request) {
	console.log("Request handler 'Livro' was called.");
	loadFile(response, "Livro.html");
}

function loadFile(response, fileName){
	response.writeHead(200);
	var file = fs.readFileSync(fileName, "utf8");
	response.write(file);
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.studentPage = studentPage;
exports.defaultCss = defaultCss;
exports.mainScript = mainScript;
exports.loan = loan;
exports.book = book;