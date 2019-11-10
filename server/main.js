//inspired by example 07-better-chat-server.js from lec06
// and by https://www.w3schools.com/nodejs/nodejs_mysql.asp
// and here: https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
const {Server} = require('ws');
let mysql = require('mysql');
let websocksserver = new Server({port:8081,path:'/'});
let userData = {firstname: "firstname", lastname: "lastname", address: "address",phone: "phone", email: "email",  password: "password"};
let logData;

let con = mysql.createConnection({
	database: "brrower",
  	host: "localhost",
  	user: "root",
	port: "3306",
  	password: "KarmaHansJens69",
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
		let userData = JSON.parse(msg);
		console.log(userData);

		if(userData.) {
			let sqlInsert = "INSERT INTO brrower.users (firstname, lastname, address, phone, email, pssword) VALUES ('" + userData.firstname +" ','"+ userData.lastname +" ','"+ userData.addr +" ','"+ userData.phone +" ','"+ userData.email +" ','"+ userData.password +" ');";
	  	con.query(sqlInsert, function (err, result)
		{
			if (err) throw err;
  				console.log("1 record inserted");
		});	
		} else{
			console.log("kom nu")
			let sqlExists = "SELECT password FROM users where email ='" + userData.username + "';"; 
		
			//logtrue = {meg:sqlExists}; 
			websock.send(JSON.stringify(sqlExists.localeCompare(userData.password))); 	
		}

	  
	})
    //websock.on ("login", log => {
		//console.log("login request!");
		//logData = JSON.parse(log);
		//console.log(logData);
		//let sqlExists = "SELECT password FROM users where email ='" + logData.username + "';"; 
		
		//logtrue = {meg:sqlExists}; 
		//websock.send(JSON.stringify(sqlExists.localeCompare(userData.password))); 
            
			
		
	});

	
	

