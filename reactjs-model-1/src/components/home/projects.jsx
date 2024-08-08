import React, { useState } from 'react';

import p1_1 from '../../assets/projects/project1/_1.png';
import p1_2 from '../../assets/projects/project1/_2.png';
import p1_3 from '../../assets/projects/project1/_3.png';

import p2_1 from '../../assets/projects/project2/_1.png';
import p2_2 from '../../assets/projects/project2/_2.png';
import p2_3 from '../../assets/projects/project2/_3.png';

import p3_1 from '../../assets/projects/project3/_1.png';
import p3_2 from '../../assets/projects/project3/_2.png';
import p3_3 from '../../assets/projects/project3/_3.png';


export default function Projects() {
    
    return (
        <section className='projects'>
            <h3>Mes recents projets</h3>

            <div className="project_head_image">
                <img src="./src/assets/project_picture_head.jpg" alt="" />
            </div>

            <div className="projects_list">

                <ProjectsItem h4={"Application mobile - Lex&Co."} p={`
                    "Leader" d'un groupe de 2 stagiaires pour la création d'un petit réseau social (MVP) pour Android et ios à l'aide de React Native et sont framework Expo, Appwrite pour le backend ainsi que la configuration d'un VPS et d'un DNS.
                    `} gallery={{_1:p1_1, _2:p1_2, _3:p1_3}} langage={`
                    React Native, Expo, Appwrite, VPS, DNS
                    `} 
                    link="https://play.google.com/store/apps/details?id=com.lexandco.lexandco" 
                    git={{url:"https://github.com/HugoEmanuelLC/lexandco",name:"Lex&Co."}}/>

                <ProjectsItem h4={"Projet Accenture - FMB"} p={`
                    Projet de groupe pour la création d'une web apps pour la gestion des employés et ces déplacements via localisation pour la éligibilité des primes FMB, le tout vérifié par le RH.
                    `} gallery={{_1:p2_1, _2:p2_2, _3:p2_3}} langage={`
                    React, Appwrite, Vercel
                    `} 
                    link="https://accenture-iota.vercel.app/" 
                    git={{url:"https://github.com/HugoEmanuelLC/Accenture",name:"Accenture"}}/>

                <ProjectsItem h4={"Jeux - oxo"} p={`
                    Réalisation du jeux Tic Tac Toe à l'aide de javascript vanilla.
                    `} gallery={{_1:p3_1, _2:p3_2, _3:p3_3}} langage={`
                    JavaScript, HTML5, CSS3
                    `} 
                    link="https://hugoemanuellc.github.io/js/DOM/exo14-oxo-jeux/" 
                    git={{url:"https://github.com/HugoEmanuelLC/js/tree/main/DOM/exo14-oxo-jeux",name:"DOM / oxo"}}/>

            </div>
        </section>
    )
}


function ProjectsItem ({h4, p, gallery, langage, link=null, git={name:'GitHub', url:'#'}}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };
    return(
        <div className="project">
            <div className="gallery">
                <div className="btns">
                    <button className='prev' onClick={prevSlide}><i class='bx bx-chevron-left'></i></button>
                    <button className='next' onClick={nextSlide}><i class='bx bx-chevron-right'></i></button>
                </div>
                <figure className={currentSlide === 0 ? 'active' : ''}>
                    <img src={gallery._1} alt="project" />
                </figure>   
                <figure className={currentSlide === 1 ? 'active' : ''}>
                    <img src={gallery._2} alt="project" />
                </figure> 
                <figure className={currentSlide === 2 ? 'active' : ''}>
                    <img src={gallery._3} alt="project" />
                </figure>
            </div>
            <div className="description">
                <h4>{h4}</h4>
                <p>{p}</p>
                <p><strong className='strong'>{langage}</strong></p>
            </div>

            <a className='link_git' href={git.url}>GitHub: {git.name}</a>

            <a className='button' href={link}>
                Voir projet
            </a>
        </div>
    )
}