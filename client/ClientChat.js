// Inspired by Lec06 example 07-better-chat-client.html
window.addEventListener("load", () => {
	let ws = new WebSocket("ws://localhost:8080/");
	let userid = document.getElementById("userid");
	let input = document.getElementById("input");
	let button = document.getElementById("button");
	let connect = document.getElementById("connect")

	ws.onopen = ()=>
	{
		console.log("connected");
		ws.send(JSON.stringify({type:"connection", userid:localStorage.getItem("userid")}));
	};
	ws.onclose = () => console.log("disconnected", e.reason);
	ws.onerror = () => console.log("Something went wrong: ",e);
	ws.onmessage = event => {
		let json = JSON.parse(event.data);
		let node = document.createTextNode(json.time + " " + json.userid + ": " + '"' + json.msg+ '"');
		let div = document.createElement("div");
		div.appendChild(node);
		document.body.appendChild(div);
	};
	// connect.addEventListener("click", () => {
	// 	// only at initial connection
	// 	// setup userid for the server
	// 	ws.send(JSON.stringify({type:"connection", userid:localStorage.getItem("userid")}));
	// });
	button.addEventListener("click", () => {
		ws.send(JSON.stringify({type:"msg", msg:input.value, userid:userid.value, toUser:toUser.value}));
		input.value="";
	});
});
