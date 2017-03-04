import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDlV81xv7SdxApUBQSXiBgkvOZ3O-EbKgk",
    authDomain: "blood-management-system.firebaseapp.com",
    databaseURL: "https://blood-management-system.firebaseio.com",
    storageBucket: "blood-management-system.appspot.com",
    messagingSenderId: "606162516655"
  };
  firebase.initializeApp(config);
export class FirebaseService {

    static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static ref = firebase.database().ref();
     static refDonor = firebase.database().ref("donorList");
    static storage = firebase.storage().ref();
    static auth = firebase.auth();

    // constructor() { }

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }
    
}