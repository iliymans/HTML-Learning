// @iliymans
let productContainer = document.querySelector("#products");
function showAllProducts() {
  for (let i = 0; i < products.length; i++) {
    productContainer.innerHTML += `
    <div class="product">
        <img src="${products[i].imgSrc}"
        alt="${products[i].name}">
        <h5>${products[i].name}</h5>
        <p>تعداد موجودی : ${products[i].inStock}</p>
        <span>${commafy(products[i].price)}</span>
        <i class="fa-solid fa-cart-plus fa-lg" style="color: #3C486B;" title="اضافه کردن به سبد خرید" onclick="addToCart(${
          products[i].id
        })"></i>
    </div>
    `;
  }
}
showAllProducts();

// Show/Hide Cart
let cartHeader = document.querySelector(".cart-header");
let cartContent = document.querySelector(".cart");
cartHeader.addEventListener("click", function () {
  if (cartContent.style.height == "300px") {
    cartContent.style.height = "37px";
  } else if(cartContent.style.width == "120px"){
    cartContent.style.width = "300px";
  }else if(cartContent.style.width == "300px"){
    cartContent.style.width = "120px";
  }else if((cartContent.style.height == "37px")||(cartContent.style.height == "47px")) {
    cartContent.style.height = "300px";
  }
});

// Cart array
let cart = [];

// Add to cart array funcion
function addToCart(id) {
  let itemId = cart.some(function (item) {
    return item.id == id;
  });

  if (itemId) {
    changeNumbersOfUnits("plus", id);
  } else {
    let item = products.find(function (i) {
      return i.id == id;
    });
    item.numberOfUnit = 1;
    cart.push(item);
  }

  renderCartItem();
  renderTotal();
}

// Add to cart function
let cartItems = document.querySelector(".cart-items");
function renderCartItem() {
  cartItems.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartItems.innerHTML += `
    <li class="cart-item">
      <div class="p-name" onclick="deleteFromCart(${cart[i].id})" title="حذف محصول">${cart[i].name}</div>
      <div class="p-price" style="color: #3C486B;">${commafy(cart[i].price)}</div>
      <div class="p-unit">
          <span class="plus"><i onclick="changeNumbersOfUnits('plus' , '${cart[i].id}')" class="fa-solid fa-square-plus fa-lg" style="color: #008000;"></i></span>
          <span class="unit">${cart[i].numberOfUnit}</span>
          <span class="minus"><i onclick="changeNumbersOfUnits('minus' , '${cart[i].id}')" class="fa-sharp fa-solid fa-square-minus fa-lg"
                style="color: #ff0000;"></i></span>
      </div>
    </li>  
      <hr>
    `;
  }
  renderTotal();
}

// Change number of unit
function changeNumbersOfUnits(action, id) {
  cart = cart.map(function (item) {
    let oldNumberOfUnits = item.numberOfUnit;
    if (item.id == id) {
      if (action == "plus" && oldNumberOfUnits < item.inStock) {
        oldNumberOfUnits++;
      } else if (action == "minus" && oldNumberOfUnits > 1) {
        oldNumberOfUnits--;
      }
    }
    item.numberOfUnit = oldNumberOfUnits;
    return item;
  });
  renderCartItem();
  renderTotal();
}

// Rnder total
function renderTotal() {
  let total = document.querySelector(".total");
  let totalPrice = 0;
  let totalItems = 0;
  for (let i = 0; i < cart.length; i++) {
    totalItems += cart[i].numberOfUnit;
    totalPrice += cart[i].price * cart[i].numberOfUnit;
  }

  total.innerHTML = `تعداد: ${totalItems} - قیمت: ${commafy(totalPrice)}`;
}

// Delete from cart
function deleteFromCart(id) {
  cart = cart.filter(function (item) {
    return item.id != id;
  });
  renderCartItem();
}

// Separate Number
function commafy(num) {
  var str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
}
