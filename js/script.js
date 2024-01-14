
/*--Define Products---*/

let productsDom = document.querySelector(".products");

// Use storedProducts if available, otherwise use productsDB
let products =  productsDB;

      function drawProductsUi(products =[]){
      let productsUI = products.map( (item) => {
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
                        ${item.isMe =="Y" ? "<button class='edit-product' onClick='editProduct(" +
                        item.id +
                        ")' >Edit Product</button>" : ""}
                       </div> 
                       <div class="product-item-actions">
                        <button class="add-to-cart" onClick=" addedToCart(${item.id})">Add To Cart</button>
                        <i class="favorite ${item.liked== true ? 'fa-solid fa-heart' : 'far fa-heart'}" 
                        style="color: ${item.liked==true ? "red" : ""}"
                        onclick="addToFavorite(${item.id})"></i>
                       </div>
                  </div>
            `;
      });
      productsDom.innerHTML = productsUI.join("");
}

drawProductsUi(JSON.parse(localStorage.getItem("products")) || products);



//add to cart

function addedToCart(id){
      if(localStorage.getItem("username"))
            let products = JSON.parse(localStorage.getItem("products")) || products ;
            let product = products.find( (item) => item.id === id);
            let isProductInCart = addedItem.some((i) => i.id === product.id);
            if(isProductInCart){
                   addedItem = addedItem.map((p) => {
                        if(p.id === product.id) p.qty +=1;
                        return p;
                   });
            }else{
                   addedItem.push(product);
            }
            //UI
            cartProductDom.innerHTML= "";
            addedItem.forEach((item) => {
                  cartProductDom.innerHTML += `<p>${item.title} <span class="item-qty"> ${item.qty}</span></p>`
            });

            //Save data
            localStorage.setItem("productsInCart" , JSON.stringify(addedItem));
            //Add counter of items 
            let cartProductItems = document.querySelectorAll(".carts-products div p");
            badgeDom.style.display = "block";
            badgeDom.innerHTML = cartProductItems.length;
      }else{
            window.location= "login.html"
      }
     }

     function getUniqueArr(arr , filterType){
      let unique = arr
      .map((item) => item[filterType])
      .map((item , i , final) => final.indexOf(item) === i && i)
      .filter((item) => arr[item])
      .map((item) => arr[item]);
      return unique;
     }




function saveItemData(id){
      localStorage.setItem("productId" , id);
      window.location = "cartDetails.html"
}


// function search (title , myArr){
//       let arr = myArr.filter( 
//             (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
//       drawProductsUi(arr)
// }

// search function 
function search(query, myArr) {
      let arr = myArr.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
        const descMatch = item.desc.toLowerCase().includes(query.toLowerCase());
        const sizeMatch = item.size.toLowerCase().includes(query.toLowerCase());
    
        return titleMatch || descMatch || sizeMatch;
      });
    
      drawProductsUi(arr);
    }
    

let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup" , function(e){
            const query = e.target.value.trim();
            if (query === "") {
                  // If the input is empty, show all products
                  drawProductsUi(JSON.parse(localStorage.getItem("products")));
                  return;
            }
            // If there is a query, perform the search
            search(query, JSON.parse(localStorage.getItem("products")));
});


//Add to favorite
let favoriteItems = localStorage.getItem("productsFavorite")
? JSON.parse(localStorage.getItem("productsFavorite")) : [];

// function addToFavorite(id){
//       if(localStorage.getItem("username")) {
//             let product = products.find((item) => item.id === id) ;
//             product.liked = true ;
//             favoriteItems = [...favoriteItems , product];
//             let uniqueProducts = getUniqueArr(favoriteItems , "id");
//             localStorage.setItem("productsFavorite" , JSON.stringify(uniqueProducts));
//             products.map((item) => {
//              if(item.id === product.id){
//                   item.liked = true;
//              }
//             //  return item;
//              });
//              localStorage.setItem("products" , JSON.stringify(products));
//              drawProductsUi(products);
//       }else{
//             window.location = "login.html"
//       }
// }

function addToFavorite(id) {
      if (localStorage.getItem("username")) {
        let products = JSON.parse(localStorage.getItem("products")) || products;
        let product = products.find((item) => item.id === id);
    
        if (!product.liked) {
          product.liked = true;
          favoriteItems = [...favoriteItems, product];
          let uniqueProducts = getUniqueArr(favoriteItems, "id");
          localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    
          products.forEach((item) => {
            if (item.id === product.id) {
              item.liked = true;
            }else{
                  item.liked = false;
            }
          });
    
          localStorage.setItem("products", JSON.stringify(products));
          drawProductsUi(products);
        } else {
          console.log("Product already in favorites");
        }
      } else {
        window.location = "login.html";
      }
    }
    

//filter products by size
let sizeFilter = document.getElementById("size-filter");
sizeFilter.addEventListener("change" , getProductsFilteredBySize);

function getProductsFilteredBySize(e){
  let val = e.target.value ;
  let products = JSON.parse(localStorage.getItem("products")) || products;

  if(val==="all"){
      drawProductsUi(products)
  }else{
      products = products.filter((i)=> i.size === val);
      drawProductsUi(products);
  }
}


//edit product function
function editProduct(id){
      localStorage.setItem("editProduct" , id);
      window.location = "editProduct.html"
}
