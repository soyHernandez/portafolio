import { useState } from 'react'

import { VisibilityObserver } from '../hook/IntersectionObserver'

export const Skill = () => {
    const [visible, setVisible] = useState(false)
    const show = (e) => {
        const container = e.target
        container.nextSibling.classList.remove('hidden')
    }
    const hidden = (e) => {
        const container = e.target
        container.nextSibling.classList.add('hidden')
    }
    const skillObserver = () => {
        return (
            <>
                <div className='board' ><p>Skill</p></div>
                <div className='skill-body' >
                    <p>Tecnology</p>
                    <div>
                        <div className='container-t'>
                            <img src="src\img\HTML5.svg" onMouseLeave={show} onMouseOver={hidden} alt="html" />
                            <p>HTML5</p>
                        </div>
                        <div className='container-t'>
                            <img src="src\img\css3.svg" onMouseLeave={show} onMouseOver={hidden} alt="css3" />
                            <p>CSS3</p>
                        </div>
                        <div className='container-t'>
                            <img src="src\img\javascript.svg" onMouseLeave={show} onMouseOver={hidden} alt="javascript" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='container-t'>
                            <img src="src\img\React.svg" onMouseLeave={show} onMouseOver={hidden} alt="react" />
                            <p>REACT</p>
                        </div>
                        <div className='container-t'>
                            <img src="src\img\git.svg" onMouseLeave={show} onMouseOver={hidden} alt="git" />
                            <p>GIT</p>
                        </div>
                    </div>
                    <p>Tools</p>
                    <div>
                        <div className='container-t'>
                            <img src="src\img\vscode.svg" onMouseLeave={show} onMouseOver={hidden} alt="vscode" />
                            <p>VSCODE</p>
                        </div>
                        <div className='container-t'>
                            <img src="src\img\github.svg" onMouseLeave={show} onMouseOver={hidden} alt="github" />
                            <p>GITHUD</p>
                        </div>
                        <div className='container-t'>
                            <img src="src\img\vite.svg" onMouseLeave={show} onMouseOver={hidden} alt="vite" />
                            <p>VITE</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className={visible ? 'visibleObserver' : 'hiddenObserver'}>
            <VisibilityObserver onVisibleChange={setVisible} obj={skillObserver}></VisibilityObserver>
        </div>
    )
}
