const requestUrl = 'https://api.cryptonator.com/api/ticker/btc-usd';
// ODL WAY REQUEST!!!
// const req = new XMLHttpRequest();

// // Success callback function
// req.onload = function (){
// 	const returnedData = JSON.parse(this.responseText);
// 	console.log(returnedData.ticker.price);
// };

// // Error callback function
// req.onerror = function (errParam){
// 	console.log('ERROR!', errParam);
// };

// // making the request
// const requestUrl = 'https://api.cryptonator.com/api/ticker/btc-usd';
// req.open('GET', requestUrl);
// // req.setRequestHeader(header, value);
// req.send();

// ==================================================================== //
// FETCH REQUEST!!!
// fetch(requestUrl)
// 	.then((returnedData) => {
// 		// its not the complete data
// 		return returnedData.json(); // parse
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log("Error!!", err);
// 	})

// more beauty
// const makeRequest = async function () {
// 	try { // to request
// 		const tmpData = await fetch(requestUrl); // await ONLY VALID IN ASYNC FUNCTIONS
// 		const returnData = await tmpData.json(); // parse into JS object
// 		console.log(returnData);

// 	} catch(e){
// 		console.log("Error at requesting!", e);
// 	}
// }

// import fetch from "node-fetch";
// // globalThis.fetch = fetch

// // Determine whether the sentiment of text is positive
// // Use a web service
// async function testPost(){
//   const text = "I loved it.";
//   const response = await fetch(`http://text-processing.com/api/sentiment/`, {
//     method: "POST",
//     body: `text=${text}`,
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });
//   const json = await response.json();

//   return json;
//   //console.log(json);
// }

// testPost()
// 	.then(data => {
// 		console.log("Post request succeded!");
// 		console.log(data);
// 	})
// 	.catch(err => {
// 		console.log("Got an Error:");
// 		console.log(err);
// 	})

// ==================================================================== //
// AXIOS REQUEST!!!
// axios.get(requestUrl)
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch(e => {
// 		console.log("Error!!!", e);
// 	})

// AXIOS request using headers (deppends on API)
// generates random joke at every request
const button = document.querySelector('button');
const ul = document.querySelector('ul');
button.addEventListener('click', getDadJoke);

async function getDadJoke(){
	// set headers
	const objConfig = {
		headers: {
			Accept: "application/json"  // I want just the JSON
		}	
	};

	// res == value which the promise has been resolved
	const res = await axios.get("https://icanhazdadjoke.com/", objConfig); // WAIT and then GET.
	//console.log(res.data);

	const li = document.createElement('li');
	li.innerText = res.data.joke;
	ul.appendChild(li);
}