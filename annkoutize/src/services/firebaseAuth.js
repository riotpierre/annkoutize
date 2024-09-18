import firebase from "firebase/app";
import "firebase/auth";

// Configuration Firebase (à remplacer par vos propres informations)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...autres configurations
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

// Fonction pour s'inscrire avec email/mot de passe
export const registerWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    throw new Error("Impossible de créer un compte. Veuillez réessayer.");
  }
};

// Fonction pour se connecter avec email/mot de passe
export const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    throw new Error("Identifiants incorrects. Veuillez réessayer.");
  }
};

// Fonction pour se connecter avec Google
export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    return result.user;
  } catch (error) {
    console.error("Erreur lors de la connexion avec Google:", error);
    throw new Error(
      "Impossible de se connecter avec Google. Veuillez réessayer."
    );
  }
};

// Fonction pour se déconnecter
export const logout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    throw new Error("Impossible de se déconnecter. Veuillez réessayer.");
  }
};
