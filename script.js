let boxes=document.getElementsByClassName("box");
let cartBox=document.getElementById("cartOpen");
let sideBar=document.getElementsByClassName("side_bar");
let closeCart=document.getElementsByClassName("close");
let addToCart=document.getElementsByClassName("add_to_cart");



const boxesArr = [...boxes];

boxesArr.forEach(function(elem){
elem.addEventListener("mouseenter", function(e) {
    e.target.lastChild.previousSibling.style.display="flex";
});
elem.addEventListener("mouseleave", function(e) {
    e.target.lastChild.previousSibling.style.display="none";
});
})

cartBox.addEventListener("click", function () {
sideBar[0].style.display="block";
});
closeCart[0].addEventListener("click",function(e){
sideBar[0].style.display="none";
});

const addToCartArray=[...addToCart];
addToCartArray.forEach(function(edenAddCart){
    edenAddCart.addEventListener("click",function(){

        const dodadeno=document.createElement("div");
        const removeBtn=document.createElement("button");
        removeBtn.className="novoKopce";
        dodadeno.className="novDiv"
        removeBtn.textContent="Remove";
        dodadeno.innerHTML=`<img src="icons/shirt.jpg">`;
        sideBar[0].append(dodadeno);
        dodadeno.appendChild(removeBtn);

        
    })
});


