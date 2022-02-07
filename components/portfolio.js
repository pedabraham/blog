import React from 'react';
import styles from '../components/portfolio.module.css'
import Link from 'next/link'

//className={styles.card}

const projects = [
  {
    "name":"Wordle Clone",
    "place":"My home",
    "image":"/images/portfolio/wordle.png",
    "repo": "https://github.com/pedabraham/word_guess",
    "prod": "https://word-guess.vercel.app"
  },
  {
    "name":"Hangman",
    "place":"My home",
    "image":"/images/portfolio/hangman.jpg",
    "repo": "https://github.com/pedabraham/hangman",
    "prod": "https://hangman-pi.vercel.app/"
  },
  {
    "name":"Random Word API",
    "place":"My home",
    "video":"https://youtu.be/4S8Z_eZApfs",
    "image":"/images/portfolio/wordapi.jpg"
  },
  {
    "name":"e-CV",
    "place":"My home",
    "prod":"https://web.d2i683mwhfmzsx.amplifyapp.com",
    "repo":"https://github.com/pedabraham/reactResume",
    "image":"/images/portfolio/cv.jpg"
  },
  {
    "name":"Controller Designer",
    "place": "University of Guanajuato, 2019",
    "description":["Created a web tool to design classic controllers using HTML, CSS, JavaScript, and Python as the backend thanks to flask.","Implemented the root-locus and frequency response methods to design controllers using Python."],
    "repo":   "https://github.com/pedabraham/ControlDiscreto",
    "image":"/images/portfolio/lgr.jpg",
  },
  {
    "name":"Multi-focus Image fusion using interpolations",
    "place":"Summer research program of the University of Guanajuato, 2018",
    "description":["Developed an algorithm to combine two images, of the same scene and a distinct level of focus, 	in a single image by employing several image processing techniques, using Python."],
    "article":"http://www.jovenesenlaciencia.ugto.mx/index.php/jovenesenlaciencia/article/view/2826/2080",
    "image": "/images/portfolio/multifoco.jpg"
  },
  {
    "name":"Uni-TI",
    "place":"My home",
    "image":"/images/portfolio/uniti.jpg",
    "prod":"https://bot1-6bf7e.web.app/"
  },
  {
    "name":"DeMath",
    "place":"My home",
    "image":"/images/portfolio/demath.jpg",
    "prod" : "https://demath-bd217.web.app/"
  },
  {
    "name":"MDSM" ,
    "place":"University of Guanajuato, 2016",
  	"description":["Created a lock interface to use hand gestures by employing an array of CNY70 	sensors controlled by an FPGA described in, the hardware description language, VHDL."],
    "repo": "https://pedabraham.github.io/MDSM/",
    "image": "/images/portfolio/mdsm.jpg",
  }
]

console.log(styles)
const Card = () => {
  return(
    <div className={styles.card_layout}>
    <img
      src="/images/portfolio/hangman.jpg"
      className={styles.side_image}
      />
      <div>
        <h1>Hangman</h1>
        <a>Codigo</a>
        <a>Producción</a>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    projects.map((project)=>
    <div className={styles.card_layout}>
    <img
      src = {project.image}
      className={styles.side_image}
      />
      <div>
        <h3>{project.name}</h3>
        {
          project.repo ? (
            <p>
              <Link href={{pathname: project.repo}}>
                <a>🗃 Repo</a>
              </Link>
            </p>
          ) : ""
        }
        {
          project.prod ? (
            <p>
              <Link href={{pathname: project.prod}}>
                <a>🚀 App</a>
              </Link>
            </p>
          ) : ""
        }
        {
          project.video ? (
            <p>
              <Link href={{pathname: project.video}}>
                <a>📺 Video</a>
              </Link>
            </p>
          ) : ""
        }
        {
          project.article ? (
            <p>
              <Link href={{pathname: project.article}}>
                <a>📄 Article</a>
              </Link>
            </p>
          ) : ""
        }
      </div>
    </div>
  )

  )
}
