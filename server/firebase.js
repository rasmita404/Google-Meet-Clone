import firebase from 'firebase/app';
import database from 'firebase/databse';

const firebaseConfig={}; //get from firebase console

firebase.initializeApp(firebaseConfig);

let dbRef = firebase.database.ref();

export const username = prompt("Enter username: "); //ask for username and store it in this variable

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

if(roomId)
{
    dbRef = dbRef.child(roomId);
}
else 
{
    //create a new collection within the database
    dbRef = dbRef.push();
    window.history.replaceState(null, "Meet", "?id="+dbRef.key); //so that, can append a query param without refreshing the page
}

export default dbRef;