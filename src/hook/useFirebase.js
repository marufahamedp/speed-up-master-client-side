
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.ini';
import { useHistory, useLocation } from 'react-router';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, username,  history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, username)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, username: username };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, username, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                setAuthError(error.message);
            })
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
  
    useEffect(( ) => {
        let isUnmount = false;
        setIsLoading(true);
        fetch(`https://intense-sands-94991.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data =>{
                if(!isUnmount){
                    setAdmin(data.admin)
                    setIsLoading(false);
                }
            })
            return () => {
                isUnmount = true;
            }
            
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, username, method) => {
        const user = { email, displayName, username };
        fetch('https://intense-sands-94991.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;