import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCsJ9BTGIKCzm3XmEh8QCD0oVoBvaeC488',
  authDomain: 'chat-app-53363.firebaseapp.com',
  projectId: 'chat-app-53363',
  storageBucket: 'chat-app-53363.appspot.com',
  messagingSenderId: '442896232954',
  appId: '1:442896232954:web:21794d476248b498beb443',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
