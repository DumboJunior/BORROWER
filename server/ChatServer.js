//inspired by example 07-better-chat-server.js from lec06
const {Server} = require('ws');
let wsserver = new Server({port:8080,path:'/'});
let latest = {time: Date.now(), msg: "No messages yet", userid:"Server"};

wsserver.on("connection",ws=>{
		console.log("New client connected");

		ws.send(JSON.stringify(latest)+"\n");

		ws.on("close",(code,msg)=> console.log("Connection closing", code, msg));

		ws.on("message", msg => {
			let arrived = JSON.parse(msg);

			if(arrived.type == "connection")
			{
				ws.id=arrived.userid;
				console.log(arrived.userid+" arrived");
			}
			else if(arrived.type == "msg")
			{
				if(arrived.toUser != "")
				// Send to specific user
				{
					latest = {time:Date.now(), msg:arrived.msg,userid:arrived.userid };
					console.log("Message arrived", msg);
			/////// Inspired by https://stackoverflow.com/
				// link to question https://bit.ly/2Ndnctd
					wsserver.clients.forEach(function each(client) {
						if(client.id == arrived.toUser)
						{
							client.send(JSON.stringify(latest));
						}
					});
			///////
				}
				else
				{
					latest = {time:Date.now(), msg:arrived.msg,userid:arrived.userid };
					focusUser = {toUser: arrived.toUser};
					console.log("Message arrived", msg);
					wsserver.clients.forEach(c=>c.send(JSON.stringify(latest)));
				}
			}

		});
});
