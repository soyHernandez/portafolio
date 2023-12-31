import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { VisibilityObserver } from '../hook/IntersectionObserver'

export const Proyects = () => {
    const show = (id) => {
        const container = document.getElementById(id)
        container.firstChild.classList.add('action-show')
        container.lastChild.classList.add('proyects-show')
    }
    const hidden = (id) => {
        const container = document.getElementById(id)
        container.firstChild.classList.remove('action-show')
        container.lastChild.classList.remove('proyects-show')
    }


    const siteProyects = [
        {
            id: 1,
            name: 'movie search app',
            img: 'src/img/movieSearchAppScreen.png',
            src: 'https://moviesearchbyhernandez.netlify.app',
            git: 'https://github.com/soyHernandez/searchMovieApp',
            tecnology: [{
                id_t: 1,
                name_t: 'HTML5',
                src: "src/img/HTML5.svg"
            },
            {
                id_t: 2,
                name_t: 'CSS3',
                src: "src/img/css3.svg"
            },
            {
                id_t: 3,
                name_t: 'REACTJS',
                src: "src/img/React.svg"
            }]
        },
        {
            id: 2,
            name: 'weather App',
            img: 'src/img/weatherAppScreen.png',
            src: 'https://weatherappbyhernandez.netlify.app',
            git: 'https://github.com/soyHernandez/weatherApp',
            tecnology: [{
                id_t: 1,
                name_t: 'HTML5',
                src: "src/img/HTML5.svg"
            },
            {
                id_t: 2,
                name_t: 'CSS3',
                src: "src/img/css3.svg"
            },
            {
                id_t: 3,
                name_t: 'REACTJS',
                src: "src/img/React.svg"
            }]
        },
        {
            id: 3,
            name: 'Shop app',
            img: 'src/img/shopAppScreen.png',
            src: 'https://shopsitebyhernandez.netlify.app',
            git: 'https://github.com/soyHernandez/shopApp',
            tecnology: [{
                id_t: 1,
                name_t: 'HTML5',
                src: "src/img/HTML5.svg"
            },
            {
                id_t: 2,
                name_t: 'CSS3',
                src: "src/img/css3.svg"
            },
            {
                id_t: 3,
                name_t: 'REACTJS',
                src: "src/img/React.svg"
            }]
        }

    ]


    const [visible, setVisible] = useState(false)
    const proyectsObserver = () => {
        return (
            <>
                <div className='board' ><p>Proyects</p></div>
                <div className='proyects-body' >
                    {
                        siteProyects.map(res => {

                            return (
                                    <div key={res.id} id={res.id} className='main-body-p' onMouseEnter={() => show(res.id)} onMouseLeave={() => hidden(res.id)}>
                                        <div className='action'>
                                            <a href={res.src} target='blank'><p>Demo</p><FontAwesomeIcon icon={faPlay} /></a>
                                            <a href={res.git} target='blank'><p>Repository</p><FontAwesomeIcon icon={faGithub} /></a>
                                        </div>
                                        <img className='main-img' src={res.img} alt={res.name} />
                                        <br />
                                        <p className='proyects-title'><b>{res.name}</b></p>
                                        <div className='proyects-t'>
                                            <p><b>Tecnology:</b></p>
                                            {
                                                res.tecnology.map(res_t => {
                                                    return (
                                                        <img key={res_t.id_t} src={res_t.src} alt={res_t.name_t} />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    return (
        <div className={visible ? 'visibleObserver' : 'hiddenObserver'}>
            <VisibilityObserver onVisibleChange={setVisible} obj={proyectsObserver}></VisibilityObserver>
        </div>
    )
}
