import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAFGCRKvFi4Cc1hvoCuclWDpJDaRzdOJD0',
    authDomain: 'ckd-web.firebaseapp.com',
    projectId: 'ckd-web',
    storageBucket: 'ckd-web.appspot.com',
    messagingSenderId: '116756204489',
    appId: '1:116756204489:web:ec2a1d1489b00bf0097618',
    measurementId: 'G-XJGE87TZ8F',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
//gôgle auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

//facebook auth
// const auth2 = getAuth();
const provider2 = new FacebookAuthProvider();

export { auth, provider, provider2 };
export const database = getFirestore(app);