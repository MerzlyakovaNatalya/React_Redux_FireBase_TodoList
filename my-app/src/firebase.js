import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRPv-vGg9P3AzZzUsRMUcgGavmLFruJ00",
  authDomain: "todo-project-ada43.firebaseapp.com",
  projectId: "todo-project-ada43",
  storageBucket: "todo-project-ada43.appspot.com",
  messagingSenderId: "51263868259",
  appId: "1:51263868259:web:3e20dcbdcc954e2931d756",
  databaseURL: "https://todo-project-ada43-default-rtdb.europe-west1.firebasedatabase.app/",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const storage = firebase.storage();

export const todosRef = db.ref("todos");
export const storageRef = storage.ref('file');