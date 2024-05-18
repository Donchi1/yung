import React, { useEffect, useState } from "react";
import { auth, db } from "@/db/firebaseDb";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useAppStore } from "@/store/appStore";


export const useGetCurrentUser = () => {
  const {setCurrentUser} = useAppStore()
  const [user, setUser] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((fireUser) => {
          setUser(fireUser.data() as DocumentData);
          setLoading(false);
          setCurrentUser(fireUser.data() as DocumentData)
          
        }).catch(error => {
          setLoading(false);

        });
      } else {
        setLoading(false);
        setError("No user found. Please Reauthenticate!!");
      }
    });
  }, []);

  return [user, loading, error] as const;
};
