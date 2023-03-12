// Initialize an empty shopping cart
let cart = [];

// Function to add an item to the shopping cart
function addToCart(itemName, itemPrice) {
  // Check if the item is already in the cart
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === itemName) {
      // If it is, increase the quantity by 1 and exit the function
      cart[i].quantity++;
      saveCart();
      return;
    }
  }

  // If the item is not already in the cart, add it with a quantity of 1
  cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  saveCart();
}

// Function to save the shopping cart to local storage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load the shopping cart from local storage
function loadCart() {
  let cartData = localStorage.getItem('cart');
  if (cartData) {
    cart = JSON.parse(cartData);
  }
}

// Load the shopping cart when the page is first loaded
loadCart();
