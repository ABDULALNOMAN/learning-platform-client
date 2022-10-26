import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const callContext = createContext()
const auth = getAuth(app)

const Contexting = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Loginhandleclick = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }
    const value = {googleSignIn,githubSignIn,createUser,Loginhandleclick}
    return (
        <callContext.Provider value={value}>
            {children}
        </callContext.Provider>
    );
};

export default Contexting;