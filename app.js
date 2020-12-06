var btnTranslate =document.querySelector("#btn-translate")
var textArea =document.querySelector("#text-area");
console.log(textArea)

function clickEventhandler(){
    console.log ("clicked")
    console.log ("input", textArea.value);
};
btnTranslate.addEventListener("click" ,clickEventhandler )
