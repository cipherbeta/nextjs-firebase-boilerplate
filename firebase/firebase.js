import firebase from "firebase/app";
import "firebase/auth";

const config = {
	// Fill out your config here.
};
// Initialize Firebase
class Firebase {
	constructor() {
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
			this.auth = firebase.auth();
		} else {
			firebase.app();
			this.auth = firebase.auth();
		}
	}

	// Add in additional methods here if you'd like.
}

export default Firebase;
