
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBIc1jaf6n0omw6EMZpp2rrfB60695_prw",
      authDomain: "kwitter-51d71.firebaseapp.com",
      databaseURL: "https://kwitter-51d71-default-rtdb.firebaseio.com",
      projectId: "kwitter-51d71",
      storageBucket: "kwitter-51d71.appspot.com",
      messagingSenderId: "147979480816",
      appId: "1:147979480816:web:f954744cd70610cc255c35"
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
