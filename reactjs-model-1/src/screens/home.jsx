// components
import Hero from '../components/home/hero'
import About from '../components/home/about'
import Projects from '../components/home/projects'
import Skills from '../components/home/skills'
import Experience from '../components/home/experience'
import Formations from '../components/home/formations'

export default function Home() {
    
    return (
        <>
        <Hero />

        <div className='container_ container_structure'>
            <div className="left">

                <About />
                <Projects />
                <Experience />

            </div>

            <div className="right">
                <section className='informations'>
                    <h3>Informations</h3>
                    <p>Âge: 38 ans.</p>
                    <p>Ville: Braine-L'Alleud, Belgique.</p>
                    {/* <p>hugoclavinas@gmail.com</p> */}

                </section>

                <Skills />
                <Formations />

                <section className="langues">
                    <h3>Langues</h3>

                    <h6>Francais</h6>
                    <p>Langue courante.</p>

                    <h6>Português</h6>
                    <p>Langue maternelle.</p>

                    <h6>Espagnol</h6>
                    <p>Avancé.</p>

                    <h6>Anglais</h6>
                    <p>Débutant.</p>
                </section>
            </div>
        </div>
        </>
    )
}