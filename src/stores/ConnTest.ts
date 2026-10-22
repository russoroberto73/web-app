import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCdBy3r7T3crmHvWukamk9zldrZwdn7MWw',
  authDomain: 'api-project-895342866234.firebaseapp.com',
  databaseURL: 'https://api-project-895342866234-default-rtdb.firebaseio.com',
  projectId: 'api-project-895342866234',
  storageBucket: 'api-project-895342866234.firebasestorage.app',
  messagingSenderId: '895342866234',
  appId: '1:895342866234:web:6d87bf827a1f4c85106a03',
}

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

export { db }
