import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBdr4vxDzGKTjxqzNEjwNQi5bBRz8SiGmg",
    authDomain: "simiyu-gram.firebaseapp.com",
    projectId: "simiyu-gram",
    storageBucket: "simiyu-gram.appspot.com",
    messagingSenderId: "967832869500",
    appId: "1:967832869500:web:649dd214fed5c3880187f9"
}

const firebaseApp = initializeApp(firebaseConfig),
      projectStorage = getStorage(firebaseApp),
      projectFireStore = getFirestore(firebaseApp),
      timeStamp = serverTimestamp

export { projectFireStore, projectStorage, timeStamp } 