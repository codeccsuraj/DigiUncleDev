import { createContext, useState } from "react";
import { auth } from '../../backend/utils/Firebase_auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const loginHandler = async ({ email = "", password = "" }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Check if user is successfully authenticated
      if (user) {
        setToken(user.uid);
        toast.success('login successfully')
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      // Rethrow the error so it can be caught in the component
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const signupHandler = async ({ email = "", password = "" }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Check if user is successfully authenticated
      if (user) {
        setToken(user.uid);
        toast.success('your account created successfully')
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
      // Rethrow the error so it can be caught in the component
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      setToken(null)
      toast.success("logout successfully")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ token, loginHandler, signupHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
