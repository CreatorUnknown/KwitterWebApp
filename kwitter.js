// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhPHBMe3OVxipYgW-Vv5LemCfv3-OLG30",
    authDomain: "kwitterwebapp-a4083.firebaseapp.com",
    databaseURL: "https://kwitterwebapp-a4083-default-rtdb.firebaseio.com",
    projectId: "kwitterwebapp-a4083",
    storageBucket: "kwitterwebapp-a4083.appspot.com",
    messagingSenderId: "35766549707",
    appId: "1:35766549707:web:c6ba64a1ef435a42c42f4e",
    measurementId: "G-LQKG8ZK0WW"
  };

  
  function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}