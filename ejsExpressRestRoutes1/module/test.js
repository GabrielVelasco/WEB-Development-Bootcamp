/*
//=================================//
//			pass a bunch of numbers as argv and find the max
// could use SLICE method....

let max = process.argv[2];
for(let i = 0; i < process.argv.length; i++){
	if(i > 2){
		if(process.argv[i] > max)
			max = process.argv[i];
	}
}

console.log(max);
*/


/*
//=================================//
// 			create a foder at the actual dir
// inside that folder add N files.txt (their names passed as argv)
const fs = require('fs'); // import module
const folderName = "Teams";
const teamNames = process.argv.slice(2) || "t.txt"; // logic missing in case 't.txt'

fs.rmdirSync(folderName, {recursive: true});

// add .txt inside folder 
try{
	fs.mkdirSync(folderName);
	// fs.writeFileSync(`${folderName}/t.txt`, '');
	for(let n of teamNames){
		fs.writeFileSync(`${folderName}/${n}`, '');
	}

}catch (e){
	console.log(e);
}
*/

/*
//=================================//
// import module
const m = require('./mod');
console.log(m.bestTeam());
*/


/*
//=================================//
// gen a random index...
const mod = require('./mod');
const ans = mod.rTeam(["galo", "grilo", "cortinas", "cinzerokk"]);
console.log(ans);
*/