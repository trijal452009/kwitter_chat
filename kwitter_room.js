
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDCer0KYCMycM-0sKJnBgEOZ4CWYMPuFwA",
      authDomain: "kwitter-9e15b.firebaseapp.com",
      databaseURL: "https://kwitter-9e15b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9e15b",
      storageBucket: "kwitter-9e15b.appspot.com",
      messagingSenderId: "171079183625",
      appId: "1:171079183625:web:605a6edca9801c9253f7d8"
    };
  // Initialize Firebase
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome  " + user_name +"!";
  


  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "Adding room name"
    });
    localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

    

  }
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function redirecToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.localStorage="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";


}