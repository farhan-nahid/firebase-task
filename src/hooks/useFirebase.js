import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import initializeAuthentication from '../Firebase/Firebase.initialize';

const useFirebase = () => {
  initializeAuthentication();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  return { signInUsingGoogle };
};

export default useFirebase;
