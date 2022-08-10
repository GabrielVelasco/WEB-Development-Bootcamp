// select spans and buttons
// array == const

// select spans to change color
const hm = document.getElementById('hm'); // get !!ELEMENT!!
const aw = document.getElementById('aw');

hm.innerText = 0;
aw.innerText = 0;

const buttons = document.querySelectorAll('button');
// console.log(hm);

function clicked(evt){
	// returns the name of the clicked button
	//const buttonClicked = this.getAttribute('name'); // which button has been clicked
	const buttonClicked = evt.target.getAttribute('name');
	//console.log(evt);
	// console.log(buttons[0]);
	switch(buttonClicked){
		case 'home':
			hm.innerText ++;
			//evt.target.parentElement.parentElement.firstElementChild.firstElementChild.innerText ++;
			//spans[0].innerText ++;
			break;

		case 'reset':
			hm.innerText = 0;
			aw.innerText = 0;
			// spans[0].innerText = 0;
			// spans[2].innerText = 0;
			resetColor();
			break;
	
		case 'away':
			aw.innerText ++;
			//evt.target.parentElement.parentElement.firstElementChild.firstElementChild.innerText ++;
			break;
	}

	// set color acording to its value
	hm.classList.remove('col_draw');
	aw.classList.remove('col_draw');
	if(parseInt(hm.innerText) > parseInt(aw.innerText)){
		hm.classList.remove('col_loser');
		hm.classList.add('col_winnig');

		aw.classList.remove('col_winnig');
		aw.classList.add('col_loser');
	}else if(parseInt(hm.innerText) < parseInt(aw.innerText)){
		hm.classList.remove('col_winnig');
		hm.classList.add('col_loser');

		aw.classList.remove('col_loser');
		aw.classList.add('col_winnig');
	}else {
		resetColor();
	}
}

function resetColor(){
	hm.classList.remove('col_loser');
	hm.classList.remove('col_winnig');
	hm.classList.add('col_draw');

	aw.classList.remove('col_loser');
	aw.classList.remove('col_winnig');
	aw.classList.add('col_draw');
	// for(let s of spans){
	// 	s.classList.remove('col_winnig');
	// 	s.classList.remove('col_loser');
	// }
}

// add eventListener
for(let bt of buttons){
	bt.addEventListener('click', clicked);
}