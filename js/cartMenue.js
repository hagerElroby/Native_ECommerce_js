let cartProductDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector('.badge');
let cartProductMenu = document.querySelector(".carts-products")
let shoppingCartIcon = document.querySelector(".shoppingCart");

shoppingCartIcon.addEventListener('click' , openCartMenu);

//Check if there is items in localStorage
let addedItem = localStorage.getItem("productsInCart") 
? JSON.parse(localStorage.getItem("productsInCart")) 
: [];

if(addedItem){
      addedItem.map( (item)=> {
            cartProductDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
       });
       badgeDom.style.display = "block";
       badgeDom.innerHTML += addedItem.length;
}


//open cart menu
function openCartMenu (){
      if( cartProductDom.innerHTML !== ""){
          if(cartProductMenu.style.display=="block"){
                cartProductMenu.style.display="none"
          }else{
                cartProductMenu.style.display="block"
          }
      }
          
    }
    