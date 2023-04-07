let productContainer = document.querySelector("#products");
function showAllProducts() {
  for (let i = 0; i < products.length; i++) {
    productContainer.innerHTML += `
    <div class="product">
        <img src="${products[i].imgSrc}"
        alt="${products[i].name}">
        <h5>${products[i].name}</h5>
        <p>تعداد موجودی : ${products[i].inStock}</p>
        <span>${products[i].price}</span>
        <i class="fa-solid fa-cart-shopping fa-lg" title="اضافه کردن به سبد خرید" onclick="addToCart(${products[i].id})"></i>
    </div>`;
  }
}
showAllProducts();

let cartHeader = document.querySelector(".cart-header");
let cartContent = document.querySelector(".cart");
cartHeader.addEventListener("click", function () {
  if (cartContent.style.height == "300px") {
    cartContent.style.height = "37px";
  } else {
    cartContent.style.height = "300px";
  }
});

let cartList = document.querySelector(".cart-items");
let cart = [];
function addToCart(u) {
    let item = products.find(function(p){
        return p.id == u;
    })
  cart.push(item);
  console.log(cart);
  cartList.innerHTML += `
  <li class="cart-item">
    <div class="p-name" title="حذف محصول">${products[u].name}</div>
    <div class="p-price">${products[u].price}</div>
    <div class="p-unit">
        <span class="plus"><i onclick="changeNumbersOfUnits('plus' , '${products[u].id}')" class="fa-solid fa-square-plus fa-lg" style="color: #008000;"></i></span>
        <span class="unit">1</span>
        <span class="minus"><i onclick="changeNumbersOfUnits('minus' , '${products[u].id}')" class="fa-sharp fa-solid fa-square-minus fa-lg"
              style="color: #ff0000;"></i></span>
    </div>
  </li>  
    <hr>
  `;
  //   if(document.getElementsByClassName("p-name")[n].innerHTML)
  //   console.log(document.getElementsByClassName("p-name")[n].innerHTML);
//   for (let i = 0; i < n; i++) n++;
    function changeNumbersOfUnits(action , id){
        
    }
}
