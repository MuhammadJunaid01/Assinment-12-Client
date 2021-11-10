import { initializeApp } from "firebase/app";
import firebaseConfig from "./../firebaseConfig/firebase.Config";
const firebaseAuthentication = () => {
  return initializeApp(firebaseConfig);
};
export default firebaseAuthentication;
