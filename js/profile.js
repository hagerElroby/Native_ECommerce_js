let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
 let get_img = localStorage.getItem("profilePhoto");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((i) => i.isMe === "Y");

//variables 
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let ProductsLength = document.querySelector("#productLength span");
let profileImg = document.querySelector("img.user-avatar");



userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
profileImg.src = get_img;


if(myProducts.length !== 0){
      ProductsLength.innerHTML = myProducts.length;
}else {
      ProductsLength.innerHTML = 0;
}