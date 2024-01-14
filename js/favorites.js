let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");


function drawFavoriteProductsUI( allProducts = []){

      if(  JSON.parse(localStorage.getItem('productsFavorite')).length === 0)
      noProductsDom.innerHTML = "Ther is no items !!"
      let products = JSON.parse(localStorage.getItem('productsFavorite')) || allProducts;
      let productsUI = products.map( (item) => {
            return `
            <div class="product-item">
                        <img src="${item.imgUrl}" alt="head phone" class="product-item-img">
                       <div class="product-item-desc">
                        <h2>${item.title}</h2>
                        <p>${item.desc}</p>
                        <span>Size: ${item.size}</span><br/>
                        <span>Quntatie: ${item.qty}</span>
                       </div> 
                       <div class="product-item-actions">
                        <button class="add-to-cart" onClick="removeItemFromFavorite(${item.id})">Remove From Favorite</button>
                        <i class="favorite far fa-heart"></i>
                       </div>
                  </div>
            `;
      });
      productsDom.innerHTML = productsUI.join("");
}
drawFavoriteProductsUI();


function removeItemFromFavorite(id){
      let productsFavorite = localStorage.getItem("productsFavorite");
      if(productsFavorite){
            let items = JSON.parse(productsFavorite);
            let filteredItems = items.filter( (item) => item.id !== id);
            localStorage.setItem("productsFavorite" , JSON.stringify(filteredItems));
            drawFavoriteProductsUI(filteredItems);
            }
}
