import React from 'react'
import { Presentation } from './components/presentation'
import './style/style.css'
import { Skill } from './components/skill'
import { Proyects } from './components/proyects'
import { Contact } from './components/contact'
import { ModalProvider } from './context/ModalProvider'
export const Pages = () => {
    return (
        <ModalProvider>
            <Presentation></Presentation>
            <Skill></Skill>
            <Proyects></Proyects>
            <Contact></Contact>
        </ModalProvider>
    )
}
