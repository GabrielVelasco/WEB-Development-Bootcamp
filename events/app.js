// change div background color:
const colorArr = ["blue", "purple", "green", "orange"];

// generic function that will works for both cases
function sortColor(){
	this.style.backgroundColor = colorArr[ Math.floor(Math.random()*4) ];
}

const divv = document.querySelector('#div1');
divv.addEventListener('click', sortColor);

// Change button background color when clicked (evenListener):
// select all buttons
const allButtons = document.querySelectorAll('.but');

// iterate over the button list
for(let but of allButtons){
	but.addEventListener('click', sortColor);
}

//-----------------------------------------------------------------------//
	// ADDING AND REMOVING
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

//-----------------------------------------------------------------------//

// pretend to be a fcking game:
// evt == event object (in this case refers keydown) 
// contains properties and infos about the event
// For KB event: evt.code === the key address 
// function gameCommand(evt){
// 	switch(evt.code){
// 		case "ArrowUp":
// 			console.log("UP!");
// 			break;
// 		default:
// 			console.log("DO NOTHING!")
// 	}
// }

// window.addEventListener('keydown', gameCommand);