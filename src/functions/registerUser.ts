import { auth } from "../firebase/credentials";
import { createUserWithEmailAndPassword } from "firebase/auth";

//!***** Create User manual ***** //
export default async function registerUser(
  { email }: { email: string },
  { password }: { password: string },
): Promise<boolean> {
  try {
    // const user =
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
    console.log("Usuario creado:");
    // console.log("El email es: " + user.user.email);
    // console.log("el UUID es: " + user.user.uid);
  } catch (error) {
    console.log("Error al cargar email y password: ", error);
    return false;
  }
}
