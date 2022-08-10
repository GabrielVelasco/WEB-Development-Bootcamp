

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecoration = 'none';
// }

// for(let h1 of document.querySelectorAll('h1')){
// 	h1.innerHTML = "<i>Main Text</i> <sup>Expoent</sup>";
// }


 		// =========== POKEMONS APPEND CHILD, CREATE ELEMENT....===========  //
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';	
const createImg = (i) => {
	const img = document.createElement('img'); // create a new bt for each iteration
	const url = `${baseUrl}${i}.png`
	img.src = url;
	return img;
}

const createSpan = (i) => {
	const s = document.createElement('span'); // create a new bt for each iteration
	s.innerText = i;
	return s;
}

let i = 1;
const obj = document.querySelector('#poke');
obj.style.border = '1px solid black';

while(i <= 10){
	const d = document.createElement('div');
	d.style.display = 'inline';
	d.appendChild(createImg(i));
	d.appendChild(createSpan(i));
	obj.appendChild(d);

	// obj.appendChild(createImg(i));
	// obj.appendChild(createSpan(i));
	i++;
}
 		// =========== POKEMONS APPEND CHILD, CREATE ELEMENT....===========  //

const bt = document.createElement('button');
bt.setAttribute('id', 'b1');
bt.innerText = "B1";
bt.onclick = function(){
	alert("YOU CLICKED ME!");
}

bt.onmouseover = function(){
	console.log("YOU'RE GAY!");
}
document.querySelector("#btt").appendChild(bt);