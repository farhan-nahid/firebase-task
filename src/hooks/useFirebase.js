import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.initialize';

const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  initializeAuthentication();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
      }
    });
  }, [auth]);

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => setLoggedInUser(null));
  };

  return { signInUsingGoogle, loggedInUser, logOut };
};

export default useFirebase;
