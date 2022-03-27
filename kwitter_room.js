
const config = {
  apiKey: "AIzaSyBhMN46UoSziI3tShwEH6pFWbbIkmn4s4s",
  authDomain: "p93-63cef.firebaseapp.com",
  databaseURL: "p93-63cef",
  projectId: "p93-63cef.appspot.com",
  storageBucket: "p93-63cef.appspot.com",
  messagingSenderId: "697547033271",
  appId: "1:697547033271:web:c1f635aba9ab9d6f8edb32"
};
firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
     childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
