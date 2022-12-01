import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0c1w6GxD_JgSNp0M5sJlZf-ILQIW-LSU",
  authDomain: "todo-project-3e04a.firebaseapp.com",
  databaseURL: "https://todo-project-3e04a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-project-3e04a",
  storageBucket: "todo-project-3e04a.appspot.com",
  messagingSenderId: "447420973853",
  appId: "1:447420973853:web:f71dc2e5b955643dc857f4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export const todosRef = db.ref("todos");