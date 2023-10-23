var firebaseConfig = {
      apiKey: "AIzaSyDcOyxicWBPR2_0ULn5NT05xukr3_EcPvs",
      authDomain: "kwitter-d9f7b.firebaseapp.com",
      databaseURL: "https://kwitter-d9f7b-default-rtdb.firebaseio.com",
      projectId: "kwitter-d9f7b",
      storageBucket: "kwitter-d9f7b.appspot.com",
      messagingSenderId: "178301496341",
      appId: "1:178301496341:web:965bfca548e1c720d1f21c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;     
//End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}