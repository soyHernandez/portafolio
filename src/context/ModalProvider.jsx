import React, { useState } from 'react'
import { ModalContext } from './ModalContext'
import { Modal } from '../components/Modal'

export const ModalProvider = ({ children }) => {
    const [IsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const ShowHide = () => {
        return (
            <Modal IsOpen={IsOpen} setIsOpen={setIsOpen}></Modal>
        )
    }
    return (
        <ModalContext.Provider value={{ IsOpen, setIsOpen, openModal, ShowHide }}>
            {children}
        </ModalContext.Provider>
    )
}
