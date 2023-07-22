
let products = JSON.parse(localStorage.getItem("products"));
let productId =  localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");

let productDetails = products.find( (item) => item.id == productId);


itemDom.innerHTML = `
<img src="${productDetails.imgUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Size: ${productDetails.size}</span><br>
<span>Quntatey: ${productDetails.qty}</span><br/>
<button onClick= "editProduct(${productId})">Edit Product</button><br/> <br/>

`

//edit product function
function editProduct(id){
      localStorage.setItem("editProduct" , id);
      window.location = "editProduct.html"
}