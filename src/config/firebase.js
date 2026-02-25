import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq78Ew71z5-Zhm1BBLF9_ZPyDcOIgFfwI",

  authDomain: "fir-authentication-demo-ff21e.firebaseapp.com",

  projectId: "fir-authentication-demo-ff21e",

  storageBucket: "fir-authentication-demo-ff21e.firebasestorage.app",

  messagingSenderId: "243865466775",

  appId: "1:243865466775:web:c0482e43c9d3171d0f36d2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export { app };

export { auth };

export { googleProvider, githubProvider };
