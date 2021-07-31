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
 
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like = message_data('like');
name_with_tag = "<h4> " + name + "<img class = 'user_tick' src ='tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatedLike(this.id)'>";
span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'> LIKE: "+ like + "</span></button>";
row = name_with_tag + message_with_tag + like_button + span_with_tag
document.getElementById("output").innerHTML = row;

function updatedLike(message_id) {
      console.log("Clicked On Like Button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_Likes = Number(likes)+ 1;
      console.log(updated_Likes);
      firebase.database().ref(room_name).child(message_id).update({
            Like : updated_Likes
      });
};

    } });  }); }
getData();



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}