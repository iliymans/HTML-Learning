// Define products data
const products = [
  {
    name: "iPhone XR",
    price: 599,
    image: "https://images.macrumors.com/t/HQTzTT5qiJuv1CWielf5TUR40Gs=/1600x0/article-new/2018/09/littleiphonexr.jpg"
  },
  {
    name: "Samsung Galaxy S21",
    price: 799.99,
    image: "https://m.media-amazon.com/images/I/81IB9P7gpfL._AC_SL1500_.jpg"
  },
  {
    name: "Google Pixel 5",
    price: 699,
    image: "https://s3b.cashify.in/gpro/uploads/2020/08/03072513/google-pixel-5-right-side.png"
  },
  {
    name: "OnePlus 9",
    price: 729,
    image: "https://s.mobile.ir/Static/cache/prd/39240_0_0.jpg"
  }
];

// Get product elements and add event listener to each add-to-cart button
const productElems = document.querySelectorAll(".product");
productElems.forEach((elem, index) => {
  const button = elem.querySelector(".add-to-cart");
  button.addEventListener("click", () => {
    addToCart(index);
  });
});

// Initialize cart
const cart = [];

// Add product to cart and update cart UI
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartElem = document.querySelector(".cart ul");
  const totalElem = document.querySelector(".cart p");
  let total = 0;
  cartElem.innerHTML = "";
  cart.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product.name + " - $" + product.price.toFixed(2);
    cartElem.appendChild(li);
    total += product.price;
  });
  totalElem.textContent = "Total: $" + total.toFixed(2);
}
