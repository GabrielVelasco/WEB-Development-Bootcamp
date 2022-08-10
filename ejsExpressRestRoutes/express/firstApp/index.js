const express = require("express");
const app = express(); // EXECUTE express, returns express obj w/ methods

// console.dir(app);

/*
.use() finish the request
app.use((req, res) => {
	// runs at every new request
	// client requests and then server respods...
	console.log("NEW REQUEST!!!");
	// console.dir(req) // request obj with path and things...
	// res.send("SIMPLE STRING") // send the response
	// res.send("<h1> HTML CONTENT </h1>");
	res.send({ name: "GALO"}); // a JSON response
})
*/

app.get("/", (req, res) => {
	res.send("Home Page karalho!!");
});

app.get("/libertaChampion", (req, res) => {
	// get a specific URL
	res.send("Atletico Mineiro, <b>libertaChampion</b>"); // for this spercific URL
});

app.post("/libertaChampion", (req, res) => {
	res.send("Different from a req");
});

// match a pattern with params
app.get("/r/:name", (req, res) => {
	// console.dir(req);
	res.send(`You entered at <b>${req.params.name}</b>`);
	// console.log("You entered at ${req.params}");
});

app.get("/r/:name/:secondName", (req, res) => {
	// console.dir(req); // CHECK REQ.PARAMS
	res.send("THE RESPONSEK KKKKKKKKKKKK!");
	// res.send(`You entered at <b>${req.params.name}</b>`);
	// console.log("You entered at ${req.params}");
});

//QUERY STRINGS
app.get("/search", (req, res) => {
	console.log(req.query);
	// /search?test=value
	// req.query.test do something...
	res.send("nothing by now");
});

// aways at the END!!!!!!
app.get("*", (req, res) => { // generic url request
	res.send("IDK wth is this!");
});

app.listen(3000, () => {
	// starts the server, add listener to the port 3000 (localhost)
	console.log("YESSSSSS!!!!!");
});