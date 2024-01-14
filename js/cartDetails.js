
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId =  localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find( (item) => item.id == productId);

itemDom.innerHTML = `
<img src="${productDetails.imgUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Size: ${productDetails.size}</span><br>
<span>Quntatey: ${productDetails.qty}</span><br/>
${productDetails.isMe =="Y" ? "<button class='edit-product' onClick='editProduct(" +
productId +
")' >Edit Product</button>" : ""}
`

//edit product function
function editProduct(id){
      localStorage.setItem("editProduct" , id);
      window.location = "editProduct.html"
}

