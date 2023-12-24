let btn = document.querySelector("button");
let inp =document.querySelector("input");
 
inp.addEventListener("keypress",function(event){
    alert("key was press",event.code); 
    console.log('Ctrl key pressed:', event.ctrlKey);
    //arrow,arrowdown,,ArrowLeft,ArrowRight
    if(event.code=="KeyU"){
        alert("character moves forword");
    }
    if(event.code=="KeyD"){
        alert("character moves forword");
    }
    if(event.code=="KeyL"){
        alert("character moves forword");
    }
    if(event.code=="KeyR"){
        alert("character moves forword");
    }
});
