//inspired by example 07-better-chat-server.js from lec06
window.addEventListener("load", () => {
	let websock = new WebSocket("ws://localhost:8081/");
	let lname = document.getElementById("lastname");
	let address = document.getElementById("address");
	let telph = document.getElementById("telephone");
	let mail = document.getElementById("email");
	let psswrd = document.getElementById("password");
	let btn = document.getElementById("createProfil");
	let fname = document.getElementById("firstname");
	let li = document.getElementById("login")
	

	//let userData = {firstname: "", lastname:"", addr: "", phone:"", email:"",password:""};



	btn.addEventListener("click", () => {
		console.log("click");
		msg = JSON.stringify({type: "msg", firstname: firstname.value, lastname:lastname.value, addr: address.value, phone: telephone.value, email: email.value,password: password.value})
		console.log("msg: " + msg)
		websock.send(msg);
		window.location.href='Borrower.html';
	});

});
