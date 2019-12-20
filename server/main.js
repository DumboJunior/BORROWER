//inspired by example 07-better-chat-server.js from lec06
// and by https://www.w3schools.com/nodejs/nodejs_mysql.asp
// and here: https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
const {Server} = require('ws');
let mysql = require('mysql');
let websocksserver = new Server({port:8081,path:'/'});
let userData;
const bcrypt = require('bcrypt');
let saltRounds = 10;

let con = mysql.createConnection({
	database: "brrower",
  	host: "localhost",
  	user: "root",
	port: "3306",
  	password: "Really2323",
	insecureAuth: true
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	
});

websocksserver.on("connection", websock => {
	console.log("welcome");

	websock.on("message", msg => {
		console.log("message!");
		userData = JSON.parse(msg);
		console.log(userData);

		bscript.hash(myString, saltRounds, (err, hash) => {
			if(!rr) {
			console.log(hash)
			}else{
			console.log('Error: ', err)
			}
			
	  	let sqlInsert = "INSERT INTO brrower.users (firstname, lastname, address, phone, email, pssword) VALUES ('" + userData.firstname +" ','"+ userData.lastname +" ','"+ userData.addr +" ','"+ userData.phone +" ','"+ userData.email +" ','"+ userData.password +" ');";
	  	con.query(sqlInsert, function (err, result)
		{
			if (err) throw err;
  				console.log("1 record inserted");
		});
	});
});
})