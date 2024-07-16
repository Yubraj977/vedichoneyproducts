// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnn8KmyVuE_m9kgbdp7FbtpAflviRpTpw",
  authDomain: "vedichoneyproduct-9200a.firebaseapp.com",
  projectId: "vedichoneyproduct-9200a",
  storageBucket: "vedichoneyproduct-9200a.appspot.com",
  messagingSenderId: "962051583889",
  appId: "1:962051583889:web:f0fd01aca585bc0c55f430",
  measurementId: "G-KCZEY783B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app