import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.querySelector(".products");
  // const cartContainer = document.querySelector(".cart-items");

  // Cargar productos desde Firebase
  async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      const productCard = document.createElement("div");

      // Agregar clases de Bootstrap
      productCard.className = "product-card card mb-3";
      productCard.style.maxWidth = "350px";
      productCard.style.maxHeight = "550px";
      productCard.style.margin = "15px"; // Margen alrededor de la tarjeta
      productCard.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Cantidad: ${product.quantity}</p>
                    <p class="card-text price">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart('${doc.id}')">Agregar al Carrito</button>
                </div>
            `;
      productsContainer.appendChild(productCard);
    });
  }

  // // Agregar producto al carrito
  // window.addToCart = async function (productId) {
  //   const productDoc = await getDoc(doc(db, "products", productId));
  //   const product = productDoc.data();
  //   await addDoc(collection(db, "cart"), product);
  //   loadCart();
  // };

  // Cargar productos del carrito desde Firebase
  // async function loadCart() {
  //   cartContainer.innerHTML = "";
  //   const querySnapshot = await getDocs(collection(db, "cart"));
  //   querySnapshot.forEach((doc) => {
  //     const cartItem = doc.data();
  //     const cartItemCard = document.createElement("div");
  //     cartItemCard.className = "cart-item";
  //     cartItemCard.innerHTML = `
  //               <img src="${cartItem.image}" alt="${cartItem.name}">
  //               <div class="cart-details">
  //                   <h2>${cartItem.name}</h2>
  //                   <p>Cantidad: ${cartItem.quantity}</p>
  //                   <p class="price">$${cartItem.price}</p>
  //               </div>
  //           `;
  //     cartContainer.appendChild(cartItemCard);
  //   });
  // }

  loadProducts();
  // loadCart();
});
