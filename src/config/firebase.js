import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7U2TvDRpG7ZTb6J1vcPgWcPwKO270huA",
    authDomain: "lanie-d3736.firebaseapp.com",
    projectId: "lanie-d3736",
    storageBucket: "lanie-d3736.appspot.com",
    messagingSenderId: "397464644718",
    appId: "1:397464644718:web:6d77f78666852ae79aca7f",
    measurementId: "G-7SJ6P1RWQP"
};


initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const twitter = new TwitterAuthProvider();
export const github = new GithubAuthProvider();