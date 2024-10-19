// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCynK2eIGWecNEbelIfZj6kxEsDFLHqvtk",
// //   authDomain: "jmctours-8cec6.firebaseapp.com",
// //   projectId: "jmctours-8cec6",
// //   storageBucket: "jmctours-8cec6.appspot.com",
// //   messagingSenderId: "209455499126",
// //   appId: "1:209455499126:web:582f16ddbf1431fc37dc57",
// // };
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNCCjRSbiD2VtWDMsO-8owcY9C-xwBsEQ",
  authDomain: "tours-project-asif.firebaseapp.com",
  projectId: "tours-project-asif",
  storageBucket: "tours-project-asif.appspot.com",
  messagingSenderId: "515075794161",
  appId: "1:515075794161:web:1d184234f91bc1c0a8b550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
