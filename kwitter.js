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
function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}