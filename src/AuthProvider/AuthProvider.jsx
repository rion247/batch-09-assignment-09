import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../FireBase/fireBase.Config';
import { GoogleAuthProvider, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null);

    const [loading, SetLoading] = useState(true);
    
    const creatingUserManually = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const createGoogleLogin = () => {
        SetLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubProvider = new GithubAuthProvider();

    const createGitHubLogin = () => {
        SetLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const profileUpdater = (userName, userPhotoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userPhotoURL
        });
    }

    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                SetUser(currentUser);
                SetLoading(false);
            } else {
                SetUser(null);
                SetLoading(false);
            }

        });

        return () => {
            unSubscribe()
        };

    }, [])

    const authInfo = {
        user,
        creatingUserManually,
        createGoogleLogin,
        createGitHubLogin,
        loading,
        profileUpdater,
        userSignOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;