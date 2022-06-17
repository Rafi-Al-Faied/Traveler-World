import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCc7-zatEsHB1QiTk_McY0ovV4FfOtcWnI",
    authDomain: "traveler-world.firebaseapp.com",
    projectId: "traveler-world",
    storageBucket: "traveler-world.appspot.com",
    messagingSenderId: "851412343033",
    appId: "1:851412343033:web:98c8391c28354713ae2a28",
    measurementId: "G-9J26L5JNFE"
  };
  const app = initializeApp(firebaseConfig);

  export default app;