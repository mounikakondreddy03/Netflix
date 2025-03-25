import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAQ9TdsXd6AepIy2LsK6T4KLHH0r8iitJs",
    authDomain: "netflix-clone-755f6.firebaseapp.com",
    projectId: "netflix-clone-755f6",
    storageBucket: "netflix-clone-755f6.appspot.com",
    messagingSenderId: "288117176647",
    appId: "1:288117176647:web:4a6bb2d1e0f63607cfb462"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password, navigate) => {
    try {
        console.log("Attempting to sign up...");
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log("User created:", user);

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });

        console.log("User added to Firestore!");
        alert("User registered successfully!");
        navigate("/login");
    } catch (error) {
        console.error("Error during sign-up:", error.message);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        }
};

const login = async (email, password, navigate) => {
    try {
        console.log("Attempting to login in...");
        const res = await signInWithEmailAndPassword(auth, email, password);
        alert("Login Sucessfully");
        console.log("User logged in:", res.user);
        navigate("/Home");
    } catch (error) {
        console.error("Error during login:", error.message);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const guestLogin = async (navigate) => {
    const guestEmail = "guest123@gmail.com"
    const guestPassword = "Gues@t12345"

    try {
        const res = await signInWithEmailAndPassword(auth, guestEmail, guestPassword)
        console.log("Guest login successfully", res.user);
        alert("Logged in as Guest");
        navigate("/Home");
    } catch (error) {
        console.error("Error during guest login:", error.message);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};

const logout = async () => {
    signOut(auth);
}

export { auth, db, login, signup, guestLogin, logout};