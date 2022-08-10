// mongoose.connect('mongodb://localhost:27017/:DatabaseName');

const mongoose = require('mongoose');

// async function returns a promise
main()
	.catch((err) => {
		console.log("Connection Failed"); // connection failed
		console.log(err);
	})

async function main(){
	const dbName = "brazilianLeague";
	await mongoose.connect(`mongodb://localhost:27017/${dbName}`); // connect to the DB

	// all code goes in here
	console.log("Connection Open!!!");

	// first create table/collection Schema
	// member == a league's club
	const memberSchema = new mongoose.Schema({
		name: String,
		age: Number,
		tablePos: Number
	})

	// create the model using the Scheama
	const Member = new mongoose.model("Member", memberSchema); 
	// 'Member' ==> mongoose will create collection """""""members""""""" | members.find() ...

	// Member == JS Class (props, methods...), each instance can be added to the 'members' collection at dbnName
	// see Docs for more method (.save(), etc ... )

// ==============================================================================
	// insertSingle(Member);
	// creating a instance of 'Member' Class/Model
	const AtleticoMG = new Member({name: "Galo Ganha Pfv", age: 113, tablePos: 2});
	// console.log(AtleticoMG);

	// adding the instance just created to the 'dbName' Database, it will belong to 'members' table/collection
	await AtleticoMG.save();

// ==============================================================================
	// insertManyMethod(Member);
	// pass a array of objs, each of those will be inserted at the table/collection

	await Member.insertMany([
		{name: "Team0", age: 111, tablePos: 2},
		{name: "Team1", age: 105, tablePos: 2},
		{name: "Team2", age: 99, tablePos: 2}

	]) // ===> returns a promise, could use .then().catch()

// ==============================================================================
	// finding(Member);
	// todo at node REPL
	Member.find({name: "Team0"}) // find any instances of Class/Model Member that matches...
		.then(m => console.log(m))

// ==============================================================================
	// update
	let query = {"name": "Team3"};
	await Member.findOneAndUpdate(query, {tablePos: 20})
		.then(res => {
			if(res)
				console.log("FOUND!!");
			else
				console.log("NOT FOUND!!!");
		})

// ==============================================================================
	// remove
	query = {age: {$lte: 100}} // Team2 will be deleted
	await Member.findOneAndRemove(query, {select: "name"})
		.then(tmp => {
			console.log(tmp.name);
			console.log("Removed!");
		})
}