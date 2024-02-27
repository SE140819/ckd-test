import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAj9Iv3Vm5L-NSumWSPtX1vClePz2k_R8s',
    authDomain: 'ckd--project.firebaseapp.com',
    projectId: 'ckd--project',
    storageBucket: 'ckd--project.appspot.com',
    messagingSenderId: '892997290405',
    appId: '1:892997290405:web:4606cdb5db0ba868b4c04c',
    measurementId: 'G-VMQKDQ2QJM',
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