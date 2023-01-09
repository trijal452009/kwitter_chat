//YOUR FIREBASE LINKS
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
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            masseage:msg,
            like:0,
      });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name= message_data['name'];
         message= message_data['message'];
         like= message_data['like'];
         name_with_tag="<h4>"+ name+ "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+ message + "</h4>";
         like_button="<button class='btb btn-warning' id="+firebase_message_id+ "value="+like+"  onclick='updateLike(this.id)' >";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

function updatelike("message_id")


      } });  }); }
getData();
