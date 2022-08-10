const express = require("express");
const app = express(); // starts express
const path = require("path");

app.set("view engine", "ejs"); // import ejs module
app.set("views", path.join(__dirname, "/views")); // set views path

// fake DB returnig value
const dataFromDB = () => {
	return Math.floor(Math.random()*10) + 1;
}


/// set of routes
// at requesting this URL it will request a DB that will return a random number
app.get("/rand", (req, res) => {
	let data = dataFromDB();
	res.render("template.ejs", {data: data}); // copy the var 'data' to the 'template.ejs'
});

// generates a random index i, i will be the champion
app.get("/libertaChampion", (req, res) => {
	const arrTeams = ["Galo", "Maflengo", "Cortinas", "Barca"];
	let rIndex = Math.floor( Math.random()*arrTeams.length );
	const data = arrTeams[rIndex];
	res.render("template.ejs", {data: data}); // it's common to use the same name
});

// =========== practice with PARAMETERS / PATTERNS
// if '/teamA' render teamA page
app.get("/home/:tName", (req, res) => {
	// const tName = req.params.teamName;
	const { tName } = req.params;
	// console.log(tName)
	// uses some API (or get teamA datas from DB) to return the img of teamX
	res.render("teamPage.ejs", {tName});
});

// checks if :team is the best...
// EJS logic / LOOPING, do not render

app.get("/best/:team", (req, res) => {
	// check if 'team' is at arrNames
	// console.log(req.params);
	// const team = req.params.team;
	const { team } = req.params; // alternative way... look for the key 'team' at obj 'req.params' 
								 // and save it's value to var called team
	// console.log(`THIS === ${team}`);
	// console.log(req.params.team);

	const arrNames = ["first", "second", "third"];
	// console.log(team)

	// res.render("team.ejs", {team: team, arrNames: arrNames})
	res.render("team.ejs", {team, arrNames});
});

// =========== 

// test
app.get('/', (req, res) => {
	res.send('Its OK!');
});

// opens the server
app.listen(3000, () => {
	console.log("Server running!");
});