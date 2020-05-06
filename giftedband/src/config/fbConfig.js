import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCQMT7iQSs5wH7I-aIYxgvvvkJIlXOz-Xo",
    authDomain: "price-giftedband.firebaseapp.com",
    databaseURL: "https://price-giftedband.firebaseio.com",
    projectId: "price-giftedband",
    storageBucket: "price-giftedband.appspot.com",
    messagingSenderId: "521348985312",
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;