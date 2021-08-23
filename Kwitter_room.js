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


    user_name = localStorage.getItem("user_name");


    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='RedirectToRoomName(this.id)'> # "+ Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row
//End code
});});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding new room"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "Kwitter_page.html";
}

function RedirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}