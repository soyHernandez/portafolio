import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useContext, useState} from 'react'
import { VisibilityObserver } from '../hook/IntersectionObserver'
import { ModalContext } from '../context/ModalContext'

export const Contact = () => {
    const [visible, setVisible] = useState(false)
    const {IsOpen, setIsOpen, openModal, ShowHide} = useContext(ModalContext)
    const contactObserver = () => {
        return (
            <>
                <p>RRSS</p>
                <div className='rrss-container'>
                    <div>
                        <a href="https://github.com/soyHernandez" target='blank'><FontAwesomeIcon icon={faGithub} />
                        <p>GITHUD</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/soyhernandez" target='blank'><FontAwesomeIcon icon={faLinkedin} />
                        <p>LINKEDIN</p>
                        </a>
                    </div>
                    <div onClick={openModal}  >
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>CONTACT ME</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={`board footer ${visible ? 'visibleObserver' : 'hiddenObserver'}`}>
                <VisibilityObserver onVisibleChange={setVisible} obj={contactObserver}></VisibilityObserver>
            </div>
            <div>
                {IsOpen ? ShowHide() : ''}
            </div>
        </>


    )
}
