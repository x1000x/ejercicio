import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiX9pVGlFYzTN5A-6dGzaZGVMKVWhCaPw",
  authDomain: "escalab1.firebaseapp.com",
  projectId: "escalab1",
  storageBucket: "escalab1.appspot.com",
  messagingSenderId: "456773141072",
  appId: "1:456773141072:web:3932ff0c4ae9b75404c755"
};
 

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if (!userAuth) return;

  // reference
  const userRef = firestone.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName, email} = userAuth
    const createAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }
    catch(error){
      console.log("error creating user ", error.message)
    }
  }
  return userRef;
};

//providers

export const auth = firebase.auth();
export const firestone = firebase.firestone();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: "select_account"});
export const signWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;