//element.addEventListener(event, callback)

let btns=document.querySelectorAll("button")
for(btn of btns){
btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayNamaste);
btn.addEventListener("click", sayName)

}

function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("DesiCoders");
}

function sayNamaste(){
    alert("Namste");
}