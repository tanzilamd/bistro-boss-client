import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userName = (name) => {
        const userData = { displayName: name };
        return updateProfile(auth.currentUser, userData);
    };

    // Pop up sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    // Logout
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
            console.log("Current User: ", currenUser);
            // if (currenUser) {
            //     // get token and store client\
            //     const userInfo = { email: currenUser?.email };
            //     axiosPublic.post("/jwt", userInfo).then((res) => {
            //         if (res.data.token) {
            //             localStorage.setItem("access-token", res.data.token);
            //         }
            //     });
            // } else {
            //     // TODO: remove token
            //     localStorage.removeItem("access-token");
            // }

            setLoading(false);
        });

        return () => unSubscribe();
    }, []);

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        userName,
        googleSignIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
