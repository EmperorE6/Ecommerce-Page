let boxes=document.getElementsByClassName("box");
let cartBox=document.getElementById("cartOpen");
let sideBar=document.getElementsByClassName("side_bar");
let closeCart=document.getElementsByClassName("close");
let addToCart=document.getElementsByClassName("add_to_cart");
let cena=document.getElementsByClassName("prize");
let total=document.getElementById("totalprice");
let loginBtn=document.getElementById("login");

let TotalPrice=0;
let CurrentPrice=0;
let maxItems=0;
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
        function Dodavaj(event){
            maxItems++;
            let btn=event.currentTarget;
            let btn_parent=btn.parentElement;
           let img=btn_parent.children[1].innerHTML;
           let description=btn_parent.children[2].innerHTML;
           let pricestar=btn_parent.children[3];
           let price=pricestar.children[0].innerHTML;
           
                   const dodadeno=document.createElement("div");
                   const removeBtn=document.createElement("button");
                   removeBtn.className="novoKopce";
                   dodadeno.className="novDiv"
                   removeBtn.textContent="Remove";
                   
                       dodadeno.innerHTML=`
                        <div class="cartContent">
                        <div class="cartImg">${img}</div>
                        <div class="cartDesc">${description}</div>
                        <div class="cartPrize">$${price}</div>
                        </div>
           
                       `;
                   sideBar[0].append(dodadeno);
                   dodadeno.appendChild(removeBtn);
           
        
                   let parsiranaPrice=parseInt(price);
                   if(maxItems<6){
                    TotalPrice+=parsiranaPrice;
                    total.innerHTML="Total: "+ TotalPrice+"$";
                   }
                   
                    
                   removeBtn.addEventListener("click",function(){
                       maxItems--;
                       dodadeno.remove();
                       TotalPrice-=parsiranaPrice;
                       total.innerHTML="Total: "+ TotalPrice+"$";
                       
                   });
                   console.log(maxItems);
                   if(maxItems >= 6 ){
                    
                    dodadeno.remove();
                }
                
        }       
       edenAddCart.addEventListener("click",Dodavaj);
   
});



function val() {
    d = document.getElementById("slct").value;
   if(d == "Spring"){
    boxes[5].style.display="block";
    boxes[4].style.display="block";
    boxes[6].style.display="block";

    boxes[1].style.display="none";
    boxes[2].style.display="none";
    boxes[3].style.display="none";
    boxes[0].style.display="none";
    boxes[7].style.display="none";
    boxes[8].style.display="none";
    boxes[9].style.display="none";
    boxes[10].style.display="none";
    boxes[11].style.display="none";
  
   }
   else if(d == "Winter"){
    boxes[1].style.display="block";
    boxes[3].style.display="block";
    boxes[7].style.display="block";

    boxes[0].style.display="none";
    boxes[2].style.display="none";
    boxes[4].style.display="none";
    boxes[5].style.display="none";
    boxes[6].style.display="none";
    boxes[8].style.display="none";
    boxes[9].style.display="none";
    boxes[10].style.display="none";
    boxes[11].style.display="none";
   }
   else if(d == "Summer"){
    boxes[0].style.display="block";
    boxes[2].style.display="block";
    boxes[4].style.display="block";
    boxes[6].style.display="block";

   
    boxes[1].style.display="none";
    boxes[3].style.display="none";
    boxes[5].style.display="none";
    boxes[7].style.display="none";
    boxes[8].style.display="none";
    boxes[9].style.display="none";
    boxes[10].style.display="none";
    boxes[11].style.display="none";
   }
   else if( d == "Autumn"){
    boxes[8].style.display="block";
    boxes[9].style.display="block";
    boxes[11].style.display="block";
   

    boxes[0].style.display="none";
    boxes[1].style.display="none";
    boxes[2].style.display="none";
    boxes[3].style.display="none";
    boxes[4].style.display="none";
    boxes[5].style.display="none";
    boxes[6].style.display="none";
    boxes[7].style.display="none";
    boxes[10].style.display="none";
   }else{
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.display="block";
    }
   }
};

loginBtn.addEventListener("click",function(){
    const loginWindow=document.createElement("div");
    document.body.append(loginWindow);
    loginWindow.className="loginProzor";
    loginWindow.innerHTML=
    `
    
<div class="title_login">Welcome</div>
<div class="undertitle_login">Please login or create your account</div>
<div class="vnes_login">
    <input type="text" placeholder="Enter Username" required>
    <input type="text" placeholder="Enter Password" required>
</div>
<div class="login_kopce"><button>Login</button></div>
<div class="createAcc">Create Account</div>

    `

    
    
    window.addEventListener("click",function(e){
        if(e.target == loginBtn){
            loginWindow.style.display="block";
        }else if(e.target != loginBtn && e.target !== loginWindow && e.target !== loginWindow.children[0] && e.target !== loginWindow.children[1] && e.target !==loginWindow.children[2]
           && e.target !== loginWindow.children[2].children[0] && e.target !== loginWindow.children[2].children[1] && e.target !== loginWindow.children[3] 
           && e.target !== loginWindow.children[3].children[0] && e.target !== loginWindow.children[4])
        {
            loginWindow.style.display="none";
        }
    })
    
})


