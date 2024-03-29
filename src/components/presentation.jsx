import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
export const Presentation = () => {
    const { IsOpen, setIsOpen, openModal, ShowHide } = useContext(ModalContext)

    return (
        <>
            <div className='rrss'>
                <button><a href="src\pdf\cv_alejandro_hernandez.pdf" target="_blank" rel="noopener noreferrer">Download CV</a></button>
                <div className='ico-container'>

                    <div className='ico-rrss' ><a href="https://www.linkedin.com/in/soyhernandez" target='blank'><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    <div className='ico-rrss' ><a href="https://github.com/soyHernandez" target='blank'><FontAwesomeIcon icon={faGithub} /></a></div>
                    <div className='ico-rrss' onClick={openModal}><FontAwesomeIcon icon={faEnvelope} /></div>
                </div>
            </div>
            <div className='presentation'>
                <img  type="image/svg+xml" src="src/img/porfile.jpg" alt="my_porfile_photo" />
                <div>
                    <h1>Hi, i'm Alejandro Hernandez</h1>
                    <h2>front-end developer</h2>
                </div>
            </div>
            <div>
                {IsOpen ? ShowHide() : ''}
            </div>
        </>
    )
}
