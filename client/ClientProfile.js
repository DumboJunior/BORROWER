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
	console.log(localStorage.getItem("userid"));

	//let userData = {firstname: "", lastname:"", addr: "", phone:"", email:"",password:""};



	btn.addEventListener("click", () => {
		console.log("click");
		let msg = JSON.stringify({firstname: firstname.value, lastname:lastname.value, addr: address.value, phone: telephone.value, email: email.value,password: password.value})
		console.log("msg: " + msg)
		websock.send(msg);
		window.location.href='Borrower.html';
	});
});
