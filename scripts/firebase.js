 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
 import { getFirestore, collection, getDocs,setDoc, doc,addDoc,updateDoc, deleteField,getDoc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCZaLwAc2vbODqEejZbf5V8OBfFXTVnzpI",
   authDomain: "robcook-bed9a.firebaseapp.com",
   projectId: "robcook-bed9a",
   storageBucket: "robcook-bed9a.appspot.com",
   messagingSenderId: "320512013245",
   appId: "1:320512013245:web:340ca8cb9bd765917018d4"
 };

// Initialize Firebase /* INICIALIZO LOS MUDULOS  DE FIRESTORE
     const app = initializeApp(firebaseConfig);
     const db = getFirestore(app);
     const auth = getAuth(app);
      
    console.log(app)
/**BOTON CLICK PRA EL LOG **/

console.log(document.getElementById("btloguin"))

if(document.getElementById("btloguin") != null){

  document.getElementById("btloguin").addEventListener("click", ()=> {
  
             const email = document.getElementById("emailloguin").value 
             const password = document.getElementById("pswloguin").value 
  
              createUserWithEmailAndPassword(auth, email, password)
  
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("login")
                  console.log(user.uid)
                  console.log(user)
                  console.log(user.email)
  
                  /**Aqui capturo del objeto user el .uid y el .email y lo meto en la coleccion "user"* **/
  
                  setDoc (doc(db,"User",user.uid),{
                      email: email,
                      uid : user.uid,
                      producto1: "",
                      producto2: "",
                      producto3:  ""
                  
                      });
  
  
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode+errorCode)
                  // ..
                });
  
  
          })
}


   
       

        /*** BOTON PASSS LOGUININ */

document.getElementById("btloguinIn").addEventListener("click", ()=> {

  console.log("entra sigIn")

  const email = document.getElementById("emailloginIn").value 
  const password = document.getElementById("pswloguinIn").value 

  signInWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
          // ...
      console.log("Logueado de User Ok ")
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+errorCode)
  });


})
