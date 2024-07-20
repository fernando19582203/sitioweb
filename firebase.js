// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAvFKFEbFXuPnAyyW9zMrl9q7fCaAX2YA0",
//   authDomain: "pruebasena-20340.firebaseapp.com",
//   projectId: "pruebasena-20340",
//   storageBucket: "pruebasena-20340.appspot.com",
//   messagingSenderId: "64084991301",
//   appId: "1:64084991301:web:7b2e5797953b67f362322c",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDWhPa9wCJz3gr9h8TuCOFBnVHpZDHi_ew",
  authDomain: "apppruebafernando.firebaseapp.com",
  projectId: "apppruebafernando",
  storageBucket: "apppruebafernando.appspot.com",
  messagingSenderId: "614110383196",
  appId: "1:614110383196:web:8e3101e27686fcf2f4ea99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
