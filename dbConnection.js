var pg = require("pg");

const client = new pg.Client({
  		user: '',
  		host: '',
  		database: '',
  		password: '',
  		port: ,
	})

function getClient() {
	client.connect();
	return client;
}

function query(client,text) {
	client.query(text, (err, res) => {
  		console.log(err, res["rows"][0]["nome"]);
  		client.end();
	})
}

function getQuery(clent, text){
	client.query(text, (err, res) => {
  		console.log("SQL exxecuted: " + text);
  		client.end();
  		return res["rows"];
	})
}

exports.getClient = getClient;
exports.query = query;
exports.getQuery = getQuery;