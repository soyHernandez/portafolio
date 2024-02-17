import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { VisibilityObserver } from '../hook/IntersectionObserver'

export const Proyects = () => {

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
        },

        {
            id: 4,
            name: 'Game catalog',
            img: 'src/img/gameCatalog.png',
            src: 'https://game-catalog-by-hernandez.netlify.app/',
            git: 'https://github.com/soyHernandez/game_catalog',
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
    const showInfo = (e)=>{
       e.target.firstChild.classList.add('title-show')
       e.target.lastChild.classList.add('action-show')
    }
    const hiddeInfo = (e)=>{
        e.target.firstChild.classList.remove('title-show')
        e.target.lastChild.classList.remove('action-show')
    }


    const [visible, setVisible] = useState(false)
    const proyectsObserver = () => {
        return (
            <>
                <div className='board' ><p>Proyects</p></div>
                <div className='proyects-body' >
                    {
                        siteProyects.map(res => {

                            return (
                                    <div key={res.id} id={res.id }  onMouseEnter={showInfo} onMouseLeave={hiddeInfo} className='main-body-p' >
                                        <p className='proyects-title'><b>{res.name}</b></p>
                                        <img className='main-img' type="image/svg+xml" src={res.img} alt={res.name}/>
                                        <div className='action'>
                                            <a href={res.src} target='blank'><p>Demo</p><FontAwesomeIcon icon={faPlay} /></a>
                                            <a href={res.git} target='blank'><p>Repository</p><FontAwesomeIcon icon={faGithub} /></a>
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
