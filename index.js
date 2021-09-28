

var inputText=document.querySelector("#translate-input");
var outputText=document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/minion.json" 

function getTranslationUrl(input){
    return url+"?"+"text="+ input;

}

function errorHandler(error){
    alert("Something wrong withe server ..Try Again")
}



function clickHandler(event){
console.log(event);
    var input= inputText.value;
    fetch(getTranslationUrl(input))
    .then(response=>response.json())
    .then(json =>{
        outputText.innerText= json.contents.translated;
    })
    .catch(errorHandler)
}


function clearClickHandler(event){
    
inputText.value="";
outputText.value="";

}



var translateButton= document.querySelector("#translate-button");
var clearButton= document.querySelector("#clear-button");

clearButton.addEventListener("click",clearClickHandler);

translateButton.addEventListener("click",clickHandler);
