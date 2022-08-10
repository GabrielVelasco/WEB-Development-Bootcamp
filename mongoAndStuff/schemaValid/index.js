const mongoose = require('mongoose');

// async function returns a promise
main()
	.catch((err) => {
		console.log("Connection Failed"); // connection failed
		console.log(err);
	})

async function main(){
	const dbName = "atleticoMG";
	await mongoose.connect(`mongodb://localhost:27017/${dbName}`); // connect to the DB

	// all code goes in here
	console.log("Connection Open!!!");

	// create schema
	const playerSchema = new mongoose.Schema({
		name: {
			type: String,
			required: true
		},

		age: {
			type: Number,
			required: true
		},

		pos: {
			type: String
		}
	});

	// create Model
	const Player = new mongoose.model("Player", playerSchema);

	// create and instance and save
	const jairPetista = new Player({name: "Jair Corcunda", pos: "CM"});
	await jairPetista.save()
		.catch(err => {
			console.log("error!!!!");
			console.log(err);
		})
}