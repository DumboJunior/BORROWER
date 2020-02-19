//inspired by example 07-better-chat-server.js from lec06
window.addEventListener("load", () => {
	var express = require('express');
	var router = express.Router();

	router.get('/Createprofile', function(req, res, next) {
		res.render('ClientProfile', { title: 'Registration'});
	});

	router.post('/register', function(req, res, next) 
		{	
			const firstname = req.body.firstname;
			const lastname =  req.body.lastname;
			const email = req.body.email;
			const telephone = req.body.telephone;
			const address = req.body.address;
			const password = req.body.password;

		
			
		res.render('CreateProfile', { title: 'Registration Complete'});
	});
	//let userData = {firstname: "", lastname:"", addr: "", phone:"", email:"",password:""};

	const db = require('../main.js');
	db.query('INSERT INTO users (firstname, lastname, address, phone, email, password) VALUES(?, ?, ?, ?, ?,?)', 
	[firstname, lastname,address,telephone, email, password], function(
		error, result, fields) {
			if (error) throw error;
			res.render('ClientProfile', { title: 'Registration complete'});

		})
	/*btn.addEventListener("click", () => {
		console.log("click");
		let msg = JSON.stringify({firstname: firstname.value, lastname:lastname.value, addr: address.value, phone: telephone.value, email: email.value,password: password.value})
		console.log("msg: " + msg)
		websock.send(msg);
		window.location.href='Borrower.html';
	}); */
});
