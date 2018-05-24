var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var dbConnection = require("./dbConnection")

var handle = {};
handle["/"] = requestHandlers.start;
handle["/Aluno.html"] = requestHandlers.start;
//handle["/upload"] = requestHandler.upload;
//handle["/show"] = requestHandler.show;
handle["/AlunoScript.js"] = requestHandlers.studentPage;
handle["/defaultStyle.css"] = requestHandlers.defaultCss;
handle["/main.js"] = requestHandlers.mainScript;
handle["/Emprestimo.html"] = requestHandlers.loan;
handle["/Livro.html"] = requestHandlers.book;


var client = dbConnection.getClient();
dbConnection.query(client, 'SELECT * FROM aluno');
server.start( router.route, handle );