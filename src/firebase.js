// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBWE35aaxuDE11NeYmpW8hWnmqP5WDfv-0",
  authDomain: "gitclone-chat-app.firebaseapp.com",
  databaseURL: "https://gitclone-chat-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gitclone-chat-app",
  storageBucket: "gitclone-chat-app.appspot.com",
  messagingSenderId: "875650023505",
  appId: "1:875650023505:web:2a926f1a3f6517b8493870",
  measurementId: "G-F3108BR8FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
