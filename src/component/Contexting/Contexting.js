import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const callContext = createContext()
const auth = getAuth(app)

const Contexting = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user, setUser]= useState(null)
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
    const userNameAndUrl = (identity) => {
        return updateProfile(auth.currentUser, identity)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
    }, [])
    const logOutClick = () => {
        setUser()
        return signOut(auth)
    }
    const value = {googleSignIn,githubSignIn,createUser,Loginhandleclick, user, logOutClick,userNameAndUrl }
    return (
        <callContext.Provider value={value}>
            {children}
        </callContext.Provider>
    );
};

export default Contexting;