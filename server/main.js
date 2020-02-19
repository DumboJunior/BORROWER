//inspired by example 07-better-chat-server.js from lec06
// and by https://www.w3schools.com/nodejs/nodejs_mysql.asp
// and here: https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
var express = require('express');
var mysql = require('mysql');
var userData = require('')
var MyplainPassword = require(userData.password);
var bcrypt = require('bcrypt');
const saltRounds = 10;
var app = express();



var connection = mysql.createConnection({
	database: "brrower",
  	host: "localhost",
  	user: "root",
	port: "3306",
  	password: "Really2323",
	insecureAuth: true
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	
});

/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
  });
  */
	 module.exports = connection;
connection.on("connection", connnection => {
	console.log("welcome");

/*	connection.on("message", msg => {
		console.log("message!");
		userData = JSON.parse(msg);
		console.log(userData);

		bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(MyplainPassword, salt, function(err, hash) {
				// Store hash in your password DB.
						
	  	let sqlInsert = "INSERT INTO brrower.users (firstname, lastname, address, phone, email, pssword) VALUES ('" + userData.firstname +" ','"+ userData.lastname +" ','"+ userData.addr +" ','"+ userData.phone +" ','"+ userData.email +" ','"+ userData.hash +" ');";
	  	con.query(sqlInsert, function (err, result)
		{
			if (err) throw err;
  				console.log("1 record inserted");
		});
	});
	});
}); */
});