var firebaseConfig = {
    apiKey: "AIzaSyCIc7Y0v-HKtWtulr9kRim5y45WGGweGGg",
    authDomain: "project-kwitter-ba106.firebaseapp.com",
    databaseURL: "https://project-kwitter-ba106-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-ba106",
    storageBucket: "project-kwitter-ba106.appspot.com",
    messagingSenderId: "818710239948",
    appId: "1:818710239948:web:29b257b977a8c9e75f8069"
  };

  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 console.log(firebase_message_id);
 console.log(message_data);
 name1 = message_data['name'];
 message = message_data['message'];
 like = message_data['like'];

 name_with_tag = "<h4>" +name1+ "<img class='user_tick' src='tick.png'> </h4>";
 message_with_tag = "<h4 class='message_h4'>" +message+ "</h4>";
 like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
 row = name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;

 } });  }); }
getData();



function send(){
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name: user_name,
       message: msg,
       like: 0
 });
 document.getElementById("msg").value = "";
}


function updateLike(msgid){
 likes = document.getElementById(msgid).value;
 updated_likes = Number(likes)+1;
 firebase.database().ref(room_name).child(msgid).update({
       like: updated_likes
 });
}


function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");

 window.location = "index.html";
}