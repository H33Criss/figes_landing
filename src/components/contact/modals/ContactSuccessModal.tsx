'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, useModal } from "@nextui-org/react";
import { useModalStore } from "@/store";
import { useEffect, useState } from "react";
import { IoCheckmarkCircle, IoInformationCircle } from "react-icons/io5";


export const ContactSuccessModal = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const setModal = useModalStore(state => state.setModal)

    const isOpen = () => {
        return isOpenModal;
    }

    const onOpenChange = () => {
        setIsOpenModal(!isOpenModal)
        
    }
    const onOpen = (message:string) => {
        setMessage(message)
        setIsOpenModal(true)
    }

    useEffect(() => {
        setModal({ isOpen, onOpen, onOpenChange, modalName: 'contact-success-modal' })
    }, [])

    return (
        <>
            <Modal
                backdrop="blur"
                isOpen={isOpen()}
                onOpenChange={onOpenChange}
                radius="lg"
                classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Notificacion</ModalHeader>
                            <ModalBody className="flex flex-col items-center">
                                <IoCheckmarkCircle size={130} className='text-green-600 animate__animated animate__rubberBand' />
                                <p className="text-lg font-bold">
                                    {message}
                                </p>
                                <p className="mt-2 flex items-start justify-start">
                                    <IoInformationCircle size={40} className='text-blue-600 mr-1' />
                                    Puedes revisar la bandeja de entrada de tu correo para mas detalles.
                                </p>
                            </ModalBody>
                            <ModalFooter>

                                <Button className="bg-blue-600 text-white w-full shadow-lg shadow-indigo-500/20" onPress={onClose}>
                                    Aceptar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
