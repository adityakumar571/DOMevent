let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input")

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
   
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
// let delbtns = document.querySelectorAll(".delete");

// for (let delbtn of delbtns) {
//   delbtn.addEventListener("click", function() {
//     let par=this.parentElement;
//     par.remove();
//   });
// }

//Now here is the concept of bubling
ul.addEventListener("click",function(event){
    console.log(event.target);
    console.log(event.target.nodeName);
    console.log("button clicked");

    if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    }
});

