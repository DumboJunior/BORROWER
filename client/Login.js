window.addEventListener("load", () => {
	let websock = new WebSocket("ws://localhost:8081/");
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	let li = document.getElementById("login");
	

	li.addEventListener("click", () => {
		console.log("click")
		let log = JSON.stringify({type: "log", username:username.value, password:password.value});
		console.log("tjek")
		websock.send("log " + log);
		console.log("tjek 2")
        	
	});
websock.onmessage = event => {
			let json = JSON.parse(event.data);
			if ("true".localeCompare(json)){
				window.location.href='ProfilePage.html';

			} else {
				console.LOG("FAIL LOGIN");
			}	
			} 
});