import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfigV = {
  apiKey: "AIzaSyAXjsKqzymDIVWDaEXK2_Qy5-DY2ruDeKc",
  authDomain: "produzione-6a1f0.firebaseapp.com",
  databaseURL:
    "https://produzione-6a1f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "produzione-6a1f0",
  storageBucket: "produzione-6a1f0.appspot.com",
  messagingSenderId: "648443410621",
  appId: "1:648443410621:web:50f0fdcff02c5353079fd4"
}

const app = initializeApp(firebaseConfigV, 'targetVetrina')
const DbVetrina = getDatabase(app)

export  { DbVetrina }
