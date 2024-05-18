"use client"
import  { useState, useEffect } from "react";
import { doc, onSnapshot,  DocumentData } from "firebase/firestore";
import { db } from "@/db/firebaseDb";
import { useAppStore } from "@/store/appStore";


function useGetDocument(colls: string, docId:string, { snap, user }:{snap:boolean, user?: boolean}) {
  const {setCurrentUser} = useAppStore()
  const [document, setDocument] = useState<DocumentData | undefined | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const getDocument = async () => {
         const unsubscribe = onSnapshot(doc(db, colls, docId),
          (qsnap) => {
            setDocument(qsnap.data());
            setLoading(false);
            user && setCurrentUser(qsnap.data() as DocumentData)
          },
          (err) => {
            setError(err.message);
            setLoading(false);
           
          }
        );
        return unsubscribe;
      } 

    getDocument();
  }, [docId, colls]);

  return [document, loading, error] as const;
}



export default useGetDocument;
