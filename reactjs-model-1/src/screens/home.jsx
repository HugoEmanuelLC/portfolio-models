// components
import Hero from '../components/home/hero'
import About from '../components/home/about'

export default function Home() {
    return (
        <>
        <Hero />
        <div className='container_ container_structure'>
            <div className="left">
                <section className="about">
                    <h3>A propos de moi</h3>
                    <p>Je suis un développeur web et mobile, passionné par les nouvelles technologies. Je suis spécialisé dans le développement d'applications web et mobiles. Je suis également un grand fan de React et React Native. Je suis également un grand fan de React et React Native.</p>
                </section>

                <section className='projects'>
                    <h3>Mes recents projets</h3>
                    <div className="projects_list">
                        <div className="project">
                            <figure>
                                <img src="https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg?w=1024" alt="project" />
                            </figure>
                            <div className="description">
                                <h4>Projet 1</h4>
                                <p>Une description de votre projet</p>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src="https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg?w=1024" alt="project" />
                            </figure>
                            <div className="description">
                                <h4>Projet 2</h4>
                                <p>Une description de votre projet</p>
                            </div>
                        </div>
                        <div className="project">
                            <figure>
                                <img src="https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg?w=1024" alt="project" />
                            </figure>
                            <div className="description">
                                <h4>Projet 3</h4>
                                <p>Une description de votre projet</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='Experience'>
                    <h3>Experience professionnelle</h3>
                    {/* pas d'experience, petit texte de motivation + aides à l'emploi */}
                    <p>Je suis actuellement à la recherche d'un emploi dans le développement web et mobile. Si vous avez des offres d'emploi ou des conseils à me donner, n'hésitez pas à me contacter.</p>
                </section>
            </div>

            <div className="right">
                <section className='localisation'>
                    <h3>Informations</h3>
                    <p>Âge: 38 ans.</p>
                    <p>Ville: Braine-L'Alleud, Belgique.</p>

                </section>
                <section className="skills">
                    <h3>Compétences</h3>
                    <p>Voici quelques-unes des technologies avec lesquelles je travaille.</p>

                    <ul>
                        <li>HTML5 - CSS3 - SASS</li>
                        <li>JavaScript - ReactJs - React Native</li>
                        <li>NodeJs - Express</li>
                        <li>PHP</li>
                        <li>MongoDB - MySql</li>
                        <li>GitHub</li>
                    </ul>
                </section>

                <section className='formation'>
                    <h3>Formations</h3>

                    <h5>BeCode - 2023 / 2024</h5>
                    <h6>Développeur web - mobile</h6>
                    <p>Formation en développement web et mobile.</p>

                    <h5>Technofutur Tic - 2021/2022</h5>
                    <h6>Développeur web - apps</h6>
                    <p>Formation en développement web et mobile.</p>

                    <h5>CESEP - 2019/2020</h5>
                    <h6>Accès aux métiers du numérique</h6>
                    <p>Formation en développement web et mobile.</p>
                </section>

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