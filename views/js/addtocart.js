const categories = [];
let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  fetch("allproduct-list.json")
    .then((response) => response.json())
    .then((data) => {
      renderProducts(data);
      console.log(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// function renderProducts(products) {
//   const rootElement = document.getElementById("root");
//   rootElement.innerHTML = products
//     .map((item) => {
//       const { image, title, price, id } = item;
//       return `<div class='box'>
//                 <div class='img-box'>
//                     <img class='images' src=${image}></img>
//                 </div>
//                 <div class='bottom'>
//                     <p>${title}</p>
//                     <h2>${price}.00</h2>
//                     <button onclick='addtocart(${id})'>Add to cart</button>
//                 </div>
//             </div>`;
//     })
//     .join("");
// }

function addtocart(productId) {
  fetch("allproduct-list.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedProduct = data.find((product) => product.id === productId);

      // Check if the product is already in the cart
      const existingProductIndex = cart.findIndex(
        (item) => item.id === selectedProduct.id
      );

      if (existingProductIndex !== -1) {
        // Product already in the cart
        // You can update the quantity or take other actions
        console.log("Product already in the cart");
      } else {
        // Product not in the cart, add it
        cart.push(selectedProduct);

        // Update the UI to display the cart items
        renderCart();
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

document.getElementById("total").innerHTML = "";
function renderCart() {
  const totalElement = document.getElementById("total");
  document.getElementById("count").innerHTML = cart.length;
  const cartItemElement = document.getElementById("cartItem");
  if (!cartItemElement) return;

  // Clear existing content
  cartItemElement.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    // If the cart is empty, display a message
    cartItemElement.textContent = "Your cart is empty";
  } else {
    // Render each item in the cart
    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
                <div class='row-img'>
                    <img src=${item.image} alt="" class='rowimg'>
                </div>
                <p>${item.title}</p>
                <h2>${item.price}</h2>
                <i class="fa-solid fa-trash" onclick="removeFromCart(${index})"></i>
                `;
      cartItemElement.appendChild(cartItemDiv);
      total += item.price;
    });
  }
  totalElement.textContent = `${total}.00 rs`;
}
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

















//  <div class="box">
//    <i class="ri-close-line close-icon"></i>
//    <img src="image/cart-img-1.jpg" alt="" />
//    <div class="content">
//      <h3>modern furniture</h3>
//      <span class="quantity">1</span>
//      <span class="multiply">x</span>
//      <span class="price">140.00rs</span>
//    </div>
//  </div>;