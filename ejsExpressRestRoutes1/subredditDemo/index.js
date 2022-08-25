// SPREAD ...
// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));

const express = require("express");
const app = express(); // starts express
const path = require("path");

const data = require("./data.json"); // parse into JS obj == pairs of {'key': value}

// console.log(data);
// console.log(data.soccer);

app.set("view engine", "ejs"); // import ejs module
app.set("views", path.join(__dirname, "/views")); // absolute path == index.js, not actual path

// 'uploading' files from /public | serve the 'public' directory
app.use(express.static(path.join(__dirname, "public"))); // runs at every get/post request

// 'public/' contains the main.html page so it will be able to access it from anywhere

// returns from a DB content related to 'topicName'
function getTopicsContent(topicName){
	// console.log(data[topicName]);
	return data[topicName];
}

// patterns/parameters
app.get("/r/:subrTopic", (req, res) => {
	// get the subrTopic name and print it's respective page
	// A JSON file with all the contents needed has been returned == data
	// match 'subrTopic' name with the obj 'data'

	const { subrTopic } = req.params;
	// console.log(subrTopic);
	const topicContents = getTopicsContent(subrTopic);
	// const topicContents = data[subrTopic];
	// console.log(topicContents);

	if(topicContents) // if not undefined
		res.render("page.ejs", {topicContents});
	else 
		res.render("notFound.ejs", {subrTopic}); // if data === 'undefined'
})

// qry string
app.get("/s/", (req, res) => {
	const { inputContent } = req.query; // extracs query str from URL
	// console.log(inputContent);
	// console.log(subrTopic);
	const topicContents = getTopicsContent(inputContent.toLowerCase());
	// const topicContents = data[subrTopic];
	// console.log(topicContents);

	if(topicContents) // if not undefined
		res.render("page.ejs", {topicContents});
	else 
		res.render("notFound.ejs", {subrTopic: inputContent}); // if data === 'undefined'
})

//---------------------------------//
app.get('/', (req, res) => {
	// console.log("This is the main page!")
	res.render("mainPage.ejs");
})

app.get('*', (req, res) => {
	res.send("WHATEVER");
})

app.listen(3000, () => {
	console.log("Server running!");
});