import { auth } from "../firebase/credentials";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export async function loginWithGoogle(): Promise<boolean> {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    return true;
    // console.log("Login exitoso");
  } catch (error) {
    return false;
    // console.log("Error al cargar con Google: ",error);
  }
}
