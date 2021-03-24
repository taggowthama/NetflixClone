import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDx2UmKc4sHgLIdEulusfOBg5U3DhLzy6s",
    authDomain: "netflix-clone-40d5a.firebaseapp.com",
    projectId: "netflix-clone-40d5a",
    storageBucket: "netflix-clone-40d5a.appspot.com",
    messagingSenderId: "230399538765",
    appId: "1:230399538765:web:a9f28b3e90e0bf17508e04"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

export {auth};
export default db;
