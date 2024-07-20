
/*SE AGREGO EL .files[0] LINEA 22 PARA QUE FUNCIONE LA IMAGEN Y SE MUESTRE */

import { db, storage } from "./firebase.js"; // Asegúrate de importar storage también
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

document.addEventListener("DOMContentLoaded", function () {
  const addProductForm = document.getElementById("addProductForm");

  addProductForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const imageFile = document.getElementById("image").files[0]; // Cambiado para obtener el archivo
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    if (imageFile) {
      const storageRef = ref(storage, `images/${imageFile.name}`); // Elimina .png si no es necesario
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      const product = {
        name,
        image: imageUrl,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      };

      try {
        await addDoc(collection(db, "products"), product);
        alert("Producto agregado exitosamente");
        addProductForm.reset();
      } catch (error) {
        console.log("Error agregando el producto: ", error.message);
        alert("error al agregar producto, intenta de nuevo");
      }
    } else {
      alert("seleccione una imagen");
    }
  });
});
