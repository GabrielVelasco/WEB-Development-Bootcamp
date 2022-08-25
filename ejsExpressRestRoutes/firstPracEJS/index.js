const express = require("express"); // download the module with NPM before...
const path = require("path"); // import module PATH
const app = express(); // starts express

app.set('view engine', 'ejs'); // set 'prop' to 'value', see express docs.. express will request..
// create 'view' folder, create doc.ejs and set it's html content

// manualy sets 'view' dir (by default it looks from where u are)
app.set('views', path.join(__dirname, '/views'));

app.get("/", (req, res) => {
	// res.send("Hi, it's working fine!");
	res.render("template.ejs"); // send back a HTML page, home.ejs
});

// starts the server
app.listen(3000, () => {
	console.log('listening!');
});

// simulate football website
// team A page have the same layout of team B, C, D ...
// the only thing that changes is the page tittle (team X, for team X page)