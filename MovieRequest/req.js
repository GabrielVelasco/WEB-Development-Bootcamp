// add event listener to the FORM instead of button
const form = document.querySelector('#searchForm'); // *Use forms to not overload the API.
const imgCont = document.querySelector('.imgContainer');
// const axios = 

const cleanScreen = () => {
    // remove all old imgs
    while(imgCont.firstChild){ // while there is a child, not empty
        imgCont.removeChild(imgCont.lastChild); // remove last child
    }
}

const printRes = (arrObj) => {
    for(let x of arrObj){
        // console.log(x.show.image.original);
        if(x.show.image){ // != NULL
            const imgRes = document.createElement('img'); // create img tag
            imgRes.src = x.show.image.medium; // instantiate
            imgCont.appendChild(imgRes);
        }
    }
}

const getShowId = () => {
    return 1;
}

form.addEventListener('submit', async function (evt){
    evt.preventDefault(); // dont reaload the page
    cleanScreen();

    const serachName = form.elements.searchInput.value; // get the name to look for
    // console.log(form.elements.searchInput.value);
    // console.dir(form);

    // Build the obj and make the GET request
    const objConfig = {
        params: {
            q: serachName
            // season: 1,
            // number: 5
        }
    }
    // const id = getShowId(); // get shows id from its object that has been returned
    const rootUrl = `http://api.tvmaze.com/search/shows?`;
    const res = await axios.get(rootUrl, objConfig); // returns the value which the promise got resolved with
    console.log(res); // .data == JSON str

    // res.data == JSON == array of objects
    printRes(res.data);
})