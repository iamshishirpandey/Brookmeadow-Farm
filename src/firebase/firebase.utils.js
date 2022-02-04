import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAjMvq7xHL9gbZYItwVQ7x9vSr3v80z1SE",
  authDomain: "farmhouse-ffd6a.firebaseapp.com",
  projectId: "farmhouse-ffd6a",
  storageBucket: "farmhouse-ffd6a.appspot.com",
  messagingSenderId: "22247757511",
  appId: "1:22247757511:web:4a3603e1ad1fca3224d0e2",
  measurementId: "G-2WCR3HYCC3",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    localStorage.clear()
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    localStorage.clear()
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error rcreating user: ", error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log("COllections:", collectionRef)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    // console.log(newDocRef);
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

// convert to object, not array... to add
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    console.log("DOC:", doc.data())
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()), // returns and converts then enables chars that url cannot read.
      id: doc.id,
      title,
      items,
    }
  })
  // console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
