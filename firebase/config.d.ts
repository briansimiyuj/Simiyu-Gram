import { FirebaseApp } from '@firebase/app';
import { FirebaseStorage, FirebaseFirestore, FieldValue } from 'firebase/firestore';

declare module './config.js' {
  const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };

  const firebaseApp: FirebaseApp;
  const projectStorage: FirebaseStorage;
  const projectFireStore: FirebaseFirestore;
  const timeStamp: FieldValue;

  export { firebaseConfig, firebaseApp, projectStorage, projectFireStore, timeStamp };
}
