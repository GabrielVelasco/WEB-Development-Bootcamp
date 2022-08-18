const f = document.querySelector("#formTest");
const sumCont = document.querySelector("#sumResult");

function createArrOfStrsFromTxt(txt){
    let tmpStr = "";
    const arrStr = [];
    for(let i = 0; i < txt.length; i++){
        if(txt[i] != '\n'){ // no abstraction
            tmpStr += txt[i];
        }else{
            arrStr.push(tmpStr);
            tmpStr = "";
        }
    }
    arrStr.push(tmpStr);

    return arrStr;
}

function isDebit(tmpStr){
    if (tmpStr.search('D') != -1)
        return true; // found 'D'
    else 
        return false; // didn't found 'D'
}

function getValidPrices(arrStr){
    let tmpStr = "";
    const arrPrices = [];
    for(let i = 0; i < arrStr.length; i++){
        tmpStr = arrStr[i].slice(28, 39);
        tmpStr = tmpStr.replace('.', "");
        tmpStr = tmpStr.replace(',', '.');
        if(isDebit(tmpStr)){
            arrPrices.push(parseFloat(tmpStr.slice(0, tmpStr.indexOf('D')-1)));
        }
    }

    return arrPrices;
}

function sumArr(arrPrices){
    return arrPrices.reduce((partialSum, a) => partialSum + a, 0);
}

f.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const txt = f[0].value;
    const arrStr = createArrOfStrsFromTxt(txt); // lv of abstraction
    const arrPrices = getValidPrices(arrStr); // lv of abstraction
    const finalSum = sumArr(arrPrices);
    console.log(finalSum);

    // updates sum value at html
    sumCont.innerHTML = "R$ " + finalSum;
})