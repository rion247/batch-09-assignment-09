import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../FireBase/fireBase.Config';
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null);

    const [loading, SetLoading] = useState(false);

    const creatingUserManually = (email, password) => {
        SetLoading(true);
        createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const createGoogleLogin = () => {
        SetLoading(true);
        signInWithPopup(auth, googleProvider);
    }

    const gitHubProvider = new GithubAuthProvider();

    const createGitHubLogin = () => {
        SetLoading(true);
        signInWithPopup(auth, gitHubProvider);
    }

    const profileUpdater = (userName, userPhotoURL) => {
        updateProfile(auth.currentUser, {
            displayName: { userName },
            photoURL: { userPhotoURL }
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                SetUser(currentUser.user);
                SetLoading(false);
            } else {
                SetUser(null);
                SetLoading(false);
            }
        });

    }, [])

    const authInfo = { user, creatingUserManually, createGoogleLogin, createGitHubLogin, loading, profileUpdater }

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