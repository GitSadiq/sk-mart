import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl76Yu0E3nfDaZwQiXA8hacCZZI_X_m08",
  authDomain: "msk-mart.firebaseapp.com",
  projectId: "msk-mart",
  storageBucket: "msk-mart.appspot.com",
  messagingSenderId: "445143895103",
  appId: "1:445143895103:web:85cb6b190a0e536f65fc8a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

async function userSignUp(userSignUpData) {
  const { username, email, password } = userSignUpData;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // console.log(response.user.uid)
    const docRef = await addDoc(collection(db, "userdetails"), {
      username: username,
      email: email,
      uid: response.user.uid,
    });
    return { error: false, message: "User created succussfully! Now login" };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

async function userLogin(userLoginData) {
  const { email, password } = userLoginData;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { error: false, message: "User login successfully" };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

function isUserThere(setUserUid, setUserEmail) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserUid(user.uid);
      setUserEmail(user.email);
      // console.log("user available", user)
    } else {
      console.log("user not there");
    }
  });
}

function logOut() {
  try {
    signOut(auth);
    return { error: false, message: "SignOut, Now you can't add to cart" };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

//trying for multiple images (done)
async function getImageURL(imageData) {
  console.log("ye dakho", imageData[0]);
  let imageUrlArray = [];
  try {
    for (var i = 0; i < imageData.length; i++) {
      const imageRef = ref(storage, "images/" + imageData[i].name);
      const res = await uploadBytes(imageRef, imageData[i]);
      const url = await getDownloadURL(res.ref);
      imageUrlArray.push(url);
      // console.log(url)
    }
    return imageUrlArray;
  } catch (error) {
    console.log(error.message);
  }
}

//single image working done
// async function getImageURL(imageData) {
//   try {
//       const imageRef = ref(storage, "profilePic/" + imageData[0].name)
//       const res = await uploadBytes(imageRef, imageData[0])
//       const url = await getDownloadURL(res.ref)
//       return url
//   }
//   catch (error) {
//       console.log(error.message)
//   }
// }

//admin create ads
const createAd = async (values, imageUrl) => {
  try {
    const response = await addDoc(
      collection(db, values.product.category),
      values.product
    );
    //upadate the create add document
    const updateAdsDetails = doc(db, values.product.category, response.id);
    await updateDoc(updateAdsDetails, {
      docId: response.id,
      url: imageUrl,
    });
  } catch (error) {
    alert("Some data missing in ad ", error.message);
  }
};

const getAllAds = async (value) => {
  try {
    const q = query(collection(db, value));
    const querySnapshot = await getDocs(q);
    let copyArray = [];
    querySnapshot.forEach((doc) => {
      copyArray.push(doc.data());
    });
    return {
      error: false,
      message: "load ads successfully from firebase",
      allAds: copyArray,
    };
  } catch (error) {
    return { error: false, message: error.message, allAds: [] };
  }
};

const specificAd = async (category, docRef) => {
  try {
    const q = query(collection(db, category), where("docId", "==", docRef));
    const querySnapshot = await getDocs(q);
    // let copyArray = [];
    let singleAdObject;
    querySnapshot.forEach((doc) => {
      // copyArray.push(doc.data());
      singleAdObject = doc.data();
    });
    return singleAdObject;
  } catch (error) {
    return error;
  }
};

const order = async (reduxData) => {
  const payment = reduxData.orderSlice.orderSummary;
  const address = reduxData.orderSlice.shipDetail;
  const items = reduxData.cartSlice;
  try {
    const response = await addDoc(collection(db, "orders"), {
      payment,
      address,
      items,
    });
  } catch (error) {
    alert("Some data missing in ad ", error.message);
  }
};

export {
  userSignUp,
  userLogin,
  isUserThere,
  logOut,
  getImageURL,
  createAd,
  getAllAds,
  specificAd,
  order,
};
