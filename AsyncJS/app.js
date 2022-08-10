async function makeFakeRequest(rNumber){
	if(rNumber <= 5)
		return "REQUEST SUCCESS!"; // resolves the promise with that value and returns it.
	else
		throw "FAIL!!"; // reject with that value...
}

async function fakeRequest(){
	let rNumber = Math.floor(Math.random()*10) + 1;
	try{
		let res = await makeFakeRequest(rNumber);
		console.log(res);

	} catch(e){
		console.log("ERROOR === ", e);

	}
}