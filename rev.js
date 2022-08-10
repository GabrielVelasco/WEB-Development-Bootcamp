// const == array

// declrarar objeto:
let obj = {
	key1: value1,
	key2: value2
}

const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
};

// array of obj
let arrObj = [
	{key: value},
	{key: value}
];

// functions, objects
const times = {
	atletico: {
		idade: 113, 
		mascote: 'galo', 
		patr: 10, 
		status: function (){
			if(this.patr > 0) return 'OK';
			else return 'FALIDO!';
		}
	},
	cruzeiro: {
		idade: 100, 
		mascote: 'raposaguei', 
		patr: 0, 
		status: function (){
			if(this.patr > 0) return 'OK';
			else return 'FALIDO!';
		}
	}
}

// events, evt object:
function gameCommand(evt){
	// evt == props from event (click, keydown ...)
	switch(evt.code){
		case "ArrowUp":
			console.log("UP!");
			break;
		default:
			console.log("DO NOTHING!")
	}
}

window.addEventListener('keydown', gameCommand); // normal function
// using arrow function
window.addEventListener('keydown', (evt) => {
	// evt == props from event (click, keydown ...)
	switch(evt.code){
		case "ArrowUp":
			console.log("UP!");
			break;
		default:
			console.log("DO NOTHING!")
	}
});

		// ADDING AND REMOVING TWITTER EXAMPLE
const commentInput = document.querySelector('#comInput');
const commentContainer = document.querySelector('.comContainer');
const postButton = document.querySelector('#postB');

// post comment
postButton.addEventListener('click', function (){
    // create element, set its content, then append
    const comment = commentInput.value;
    if(comment.length){
	    const li = document.createElement('li');
	    li.innerText = comment;
	    commentContainer.appendChild(li);
    }
})

// remove comment
commentContainer.addEventListener('click', function (evt){
	evt.target.remove();
})
