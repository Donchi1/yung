import { db, auth } from "../db/firebaseDb";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

const createNotification = async (data: {
  text: string;
  title: string;
  status?: string;
}) => {
  await addDoc(
    collection(
      db,
      `notifications`
    ),
    {
      ...data,
      date: serverTimestamp(),
      recent: true,
      uid: auth.currentUser?.uid,
    }
  );
};

export default createNotification;
