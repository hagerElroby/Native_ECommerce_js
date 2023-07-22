let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");
//display  products
function drawProductsUi(products =[]){
      let myProducts = products.filter((item) => item.isMe === "Y");
      if(myProducts.length !== 0){
      let productsUI = myProducts.map( (item) => {
            return `
            <div class="product-item" 
            style="border:${
                  item.isMe === "Y" ? "2px solid green" : ""
            }"
            >
                        <img src="${item.imgUrl}" alt="head phone" class="product-item-img">
                       <div class="product-item-desc">
                        <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
                        <p>${item.desc}</p>
                        <span>Size: ${item.size}</span>
                        <button class='edit-product' onClick='editProduct(${item.id})' >Edit Product</button>
                        <br/>
                        <button class='edit-product' onClick='deleteProduct(${item.id})' >Delete Product</button>
                       </div> 
                  </div>
            `;
      });
      productsDom.innerHTML = productsUI.join("");

}else{
    noProductsDom.innerHTML = "No Products !!"  
}
}

drawProductsUi(JSON.parse(localStorage.getItem("products")) || productsDB);


//edit product function
function editProduct(id){
      localStorage.setItem("editProduct" , id);
      window.location = "editProduct.html"
}


//delete product 
function deleteProduct(id){
      let products = JSON.parse(localStorage.getItem("products")) || productsDB;
      let myProducts = products.filter((item) => item.isMe === "Y");
      let filtered = myProducts.filter((i) => i.id !== id);

      let clickedItem = myProducts.find((i) => i.id === id);
      products = products.filter((i) => i.id !== clickedItem.id);
      localStorage.setItem("products" , JSON.stringify(products));
      drawProductsUi(filtered);
}