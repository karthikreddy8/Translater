var btnTranslate =document.querySelector("#btn-translate")
var textArea =document.querySelector("#text-area");
var outputDiv =  document.querySelector("#output")

function clickEventhandler(){
 outputDiv.innerText="karthik "+ textArea.value;
};
btnTranslate.addEventListener("click" ,clickEventhandler )
