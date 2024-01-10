import { useDisclosure } from "@nextui-org/react";
import { create } from "zustand";


//this store is only for modal in contact form, no reutilizable

export interface ModalData {
    modalName: string,
    isOpen: () => boolean,
    onOpen: () => void,
    onOpenChange: () => void
}

interface ModalState {
    modals: ModalData[],
    setModal: (modal: ModalData) => void,
    getModal: (modalName: string) => ModalData | undefined,

}


export const useModalStore = create<ModalState>()(
    (set, get) => ({
        modals: [],
        setModal: (modal: ModalData) => {
            const modals = get().modals;
            set({ modals: [...modals, modal] })
        },
        getModal: (modalName: string) => {
            const modals = get().modals;
            return modals.find(m => m.modalName === modalName);
        },

    })

)