import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAQ9TdsXd6AepIy2LsK6T4KLHH0r8iitJs",
    authDomain: "netflix-clone-755f6.firebaseapp.com",
    projectId: "netflix-clone-755f6",
    storageBucket: "netflix-clone-755f6.firebasestorage.app",
    messagingSenderId: "288117176647",
    appId: "1:288117176647:web:4a6bb2d1e0f63607cfb462"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password, navigate) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
        alert("User registered successfully!");
        navigate("/login")
    } catch (error) {
        console.error("Error during sign-up:", error.message);
        alert(error.message);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/Home")
    } catch (error) {
        console.error("Error during login:", error.message);
        alert(error.message);
    }
};

const guestLogin = async (navigate) => {
    try {
        const guestEmail = "guest@example.com";
        const guestPassword = "guest123";

        await signInWithEmailAndPassword(auth, guestEmail, guestPassword);
        alert("Logged in as Guest!");
        navigate("/home")
    } catch (error) {
        console.error("Error during guest login:", error.message);
        alert(error.message);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        alert("Logged out successfully!");
    } catch (error) {
        console.error("Error during logout:", error.message);
        alert(error.message);
    }
};

export { auth, login, signup, guestLogin, logout, db };