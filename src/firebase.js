import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjbcXP3Kij9EQQz4GN4deOGSg6mVTGePI",
  authDomain: "fir-series-1.firebaseapp.com",
  projectId: "fir-series-1",
  storageBucket: "fir-series-1.appspot.com",
  messagingSenderId: "1058636399359",
  appId: "1:1058636399359:web:4948f4fc79bd6270b082ca",
  databaseURL : "https://fir-series-1-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
