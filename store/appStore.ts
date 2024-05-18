import { DocumentData } from "firebase/firestore"
import {create} from "zustand"

interface AppStateType {
    openSidebar: boolean
    currentUser: DocumentData | null

    setOpenSidebar: () => void
    setCurrentUser: (user:DocumentData) => void

}



export const useAppStore = create<AppStateType>((set) => ({
    openSidebar: false,
    currentUser: null,
     //state updates

    setOpenSidebar: () => set((state) => ({   
       openSidebar: !state.openSidebar
    })),
    setCurrentUser: (user) => set(() => ({
      currentUser: user
    }))

}))