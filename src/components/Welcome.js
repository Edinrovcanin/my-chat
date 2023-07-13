import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

const Welcome = () => {
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Prijavljivanje putem Googlea uspješno
      const user = result.user;

      // Stvaranje referenci na kolekcije
      const firestore = getFirestore();
      const usersCollection = collection(firestore, "users");
      const activitiesCollection = collection(firestore, "activities");

      // Kreiranje korisničkog dokumenta u kolekciji "users"
      await setDoc(doc(usersCollection, user.uid), {
        name: user.displayName,
        email: user.email,
        // Ostali podaci koje želite pohraniti o korisniku
      });

      console.log("Korisnički dokument je uspješno stvoren.");

      // Kreiranje kolekcije za aktivnosti korisnika
      const userActivitiesCollection = collection(doc(usersCollection, user.uid), "activities");

      // Dodavanje primjera aktivnosti u kolekciju
      await setDoc(doc(userActivitiesCollection), {
        timestamp: serverTimestamp(),
        activity: "Korisnik se prijavio.",
      });

      console.log("Aktivnost je uspješno dodana u kolekciju aktivnosti korisnika.");
    } catch (error) {
      console.error("Pogreška prilikom prijavljivanja putem Googlea:", error);
    }
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
