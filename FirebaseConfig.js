import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
 // 4.5.2
// 4.5.2
var config = {
  apiKey: "AIzaSyA28-259P-GqVI2FkvQ8PKIcuhRdZwY4tU",
    authDomain: "simple-thing-a5e7f.firebaseapp.com",
    projectId: "simple-thing-a5e7f",
    storageBucket: "simple-thing-a5e7f.appspot.com",
    messagingSenderId: "188844065795",
    appId: "1:188844065795:web:dec19cb87913e5d9a2fa36"
 };


if (!firebase.apps.length) {
   firebase.initializeApp(config);
}else {
   firebase.app(); // if already initialized, use that one
}


firebase.firestore();
export default firebase;