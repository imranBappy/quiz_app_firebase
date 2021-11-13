import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import "./firebase";
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      currentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  });
  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = (email, password) => {
    const auth = getAuth();
    return signOut(auth);
  };
  const value = {
    ...currentUser,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
