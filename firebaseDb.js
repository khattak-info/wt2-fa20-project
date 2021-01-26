

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBSZ26bRVoWhdN_CwJquVpnlSfIUKBpz8I",
    authDomain: "http://webpr-8974e.firebaseapp.com/",
    databaseURL: "https://webpr-8974e.firebaseio.com",
    projectId: "webpr-8974e",
    storageBucket: "http://webpr-8974e.appspot.com/",
    messagingSenderId: "893068787601",
    appId: "1:893068787601:web:74246d7ed1f5fe0c81a430"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;