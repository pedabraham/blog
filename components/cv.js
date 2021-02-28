import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/cv.module.css'
//import { CSSTransitionGroup } from 'react-transition-group';

const entradasIngles= [
  {
    "title":"Developer of Random Word API",
    "place":"My home",
    "description":[
      "Built a REST API to retrieve random words, using Python, Flask, and SQL.",
      "Procesed user login, registrations, and sessions, for the API website.",
	     "Constructed templates and blueprints to manage the views of the API website, using Jinja.",
	     "Wrote documentation to display the usage of the API.",
    ],
    "link":"https://youtu.be/4S8Z_eZApfs"
  },{
    "title":"Trend Antenna Intern",
    "place":"Continental AG,  September 2019 - February 2020",
    "description":["Built a system from the ground up to a proof of concept using sprints.","Developed the frontend of a car application using Python, jQuery, JavaScript, HTML, and CSS.","Designed multiple mockups using Adobe XD.","Use of git for version control."],
    "pic":"https://www.dropbox.com/s/kkwtgdmd8jgb4qp/07BD2124-05B2-4A22-B734-B5A087E34E3C_1_105_c.jpeg?raw=1"
  },{
    "title":"Developer of Controller Designer",
    "place": "University of Guanajuato, 2019",
  	"description":["Created a web tool to design classic controllers using HTML, CSS, JavaScript, and Python as the backend thanks to flask.","Implemented the root-locus and frequency response methods to design controllers using Python."],
    "link":   "https://github.com/pedabraham/ControlDiscreto",
  },{
    "title":"Author of “Multi-focus Image fusion using interpolations”",
    "place":"Summer research program of the University of Guanajuato, 2018",
  	"description":["Developed an algorithm to combine two images, of the same scene and a distinct level of focus, 	in a single image by employing several image processing techniques, using Python."],
    "link":"http://www.jovenesenlaciencia.ugto.mx/index.php/jovenesenlaciencia/article/view/2826/2080"
  },{
    "title":"Member of project “Optical characterization of materials”",
    "place":"University of Guanajuato, 2017",
  	"description":["Modified, and tested, a methodology to synthesize thin films doped with an ionic liquid, 	obtaining nonlinear absorption as the more remarkable property."]
  },{
    "title":"Co-Developer of MDSM" ,
    "place":"University of Guanajuato, 2016",
  	"description":["Created a lock interface to use hand gestures by employing an array of CNY70 	sensors controlled by an FPGA described in, the hardware description language, VHDL."],
    "link": "http://pedabraham.github.io/MDSM/"
  }
]

function Post(props){
  /*props
  value - JSON object with the data of the post
  */
  let description = props.value.description.map((line,i)=>
    <li key={props.title + i.toString()}>{line}</li>)

  let link = props.value.link ? <a href={props.value.link}>link</a> : " "

  let text = (
    <>
      <div className={styles.post_title}>
      {props.value.title}
      </div>
      <div className={styles.post_place}>
      {props.value.place}
      </div>
      <div className={styles.post_description}>
      <ul>
        {description}
      </ul>
      </div>
      {link}
    </>
  )

  if(props.value.pic){
    const pic = props.value.pic;
    return(
      <div className={styles.post}>
        {text}
        <img src={pic}  alt="Drawing" className={styles.picture}/>
      </div>
    )
  } else{
    return(
      <div className={styles.post}>
        {text}
      </div>
    )
  }
}

function Feed(props){
  /*props
  values - array of posts
  */
  const list = props.values;
  const feed = list.map((post,i) => {
      return(
        <div key={post.title}>
        <Post value={post}/>
        </div>
      )
  })
  //const garabato = require('./Path.png');
  return(
    < >
      {feed}
    </>
  )
}

export default function CV() {
  return (
      <Feed values={entradasIngles}/>
  )
}
