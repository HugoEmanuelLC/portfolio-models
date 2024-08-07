// components
import Hero from '../components/home/hero'
import About from '../components/home/about'
import Projects from '../components/home/projects'
import Skills from '../components/home/skills'

export default function Home() {
    return (
        <>
        <Hero />
        <div className='container_ container_structure'>
            <div className="left">
                <section className="about">
                    <h3>A propos de moi</h3>
                    <p>C'est quoi l'expérience ? La réalisation de projets différents et faire face aux problèmes rencontrés ? 
                        Alors oui j'ai un peu plus d'expérience chaque jour qui passe, j'ai réalisé deux formation de développeur web assez intense, 
                        la premier (web - apps) m'as permis d'entrer dans le monde du code et voir ça complexité, 
                        la deuxième (web - mobile) plus intense avec une approche pédagogique active, la réalisation de projets en solo ou en équipe et 
                        un encadrement par des coachs en suivant une deadline précise. 
                        Cette formation m'a permis de remplir mes lacunes, grâce à elle je me sens à l'aise avec le code et ces concepts. 
                        Aujourd'hui je n'ai besoin que d'une opportunité pour montrer ce que je peux réaliser, en attendant 
                        je continue de réaliser mes propres projets comme un système d'authentification en express et mongoDB ou MySql entre autres.</p>
                </section>

                <Projects />

                <section className='Experience'>
                    <h3>Experience professionnel</h3>
                    <h5>Stage Lex&Co - 2024</h5>
                    <h6>Création d'un réseau social (MVP)</h6>
                        <p>- <strong className='strong'>React Native</strong> - <strong className='strong'>Expo</strong> 
                        <br/>- <strong className='strong'>Appwrite</strong> (backend - self hosted)
                        <br/>- <strong className='strong'>VPS</strong> (configuration) 
                        <br/>- <strong className='strong'>DNS</strong> (configuration) 
                        <br/>- <strong className='strong'>Trello</strong> (gestion des tâches)</p>

                    <br />
                    <h5>Stage ileo - 2022</h5>
                    <p>Immersion dans le métier du développement web</p>

                    <br />
                    <h3>Aide à l'emploi</h3>
                    {/* pas d'experience, petit texte de motivation + aides à l'emploi */}
                    <p>J'ai droit à quelques aides à l'emploi comme le <strong className='strong'>PFI</strong> ou le <strong className='strong'>plan ACTIVA </strong> 
                    pour aider l'entreprise qui souhaiterait m'engager.</p>
                </section>
            </div>

            <div className="right">
                <section className='localisation'>
                    <h3>Informations</h3>
                    <p>Âge: 38 ans.</p>
                    <p>Ville: Braine-L'Alleud, Belgique.</p>

                </section>

                <Skills />

                <section className='formation'>
                    <h3>Formations</h3>

                    <h5>BeCode - 2023 / 2024</h5>
                    <h6>Développeur web - mobile</h6>
                    <p>Formation professionnelle avec une approche pédagogique active, réalisation de projets en solo et 
                        en équipe et un encadrement par des coachs avec expérience dans le métier.<br/>
                        Perfectionnement de <strong className='strong'>HTML5</strong> et <strong className='strong'>CSS3</strong>, les langages <strong className='strong'>JavaScript</strong> et ça librairie <strong className='strong'>Reactjs</strong> entre autres, 
                        les accès à des <strong className='strong'>API</strong> externes ou créer par nous mêmes, <strong className='strong'>Nodejs</strong> avec <strong className='strong'>Express</strong>, <strong className='strong'>MongoDB</strong> ou <strong className='strong'>Appwrite</strong>, 
                        ça été le contenue de cette formation longue de 7 mois en plus 2 mois de stage pour la création d'un petit réseau social (MVP) 
                        pour <strong className='strong'>Android</strong> et ios à l'aide de <strong className='strong'>React Native</strong> et sont <strong className='strong'>framework</strong> <strong className='strong'>Expo</strong> ainsi que la configuration d'un <strong className='strong'>VPS</strong> et d'un <strong className='strong'>DNS</strong>.</p>

                    <h5>Technofutur Tic - 2021/2022</h5>
                    <h6>Développeur web - apps</h6>
                    <p>Revoir <strong className='strong'>HTML5/CSS3</strong> ainsi que <strong className='strong'>Bootstrap</strong>, 
                        apprentissage d'<strong className='strong'>Angular</strong>, <strong className='strong'>PHP</strong>, <strong className='strong'>NodeJS</strong> 
                        /<strong className='strong'>ExpressJS</strong> et <strong className='strong'>MySql</strong>.</p>

                    <h5>CESEP - 2019/2020</h5>
                    <h6>Accès aux métiers du numérique</h6>
                    <p>Découverte du hardware, des métiers de bureau, du monde de la 3d et du langage <strong className='strong'>PHP</strong>.</p>

                    <h5>Technofutur Tic - 2018</h5>
                    <h6>Initiation au développement web</h6>
                    <p>Apprentissage du langage de balisage <strong className='strong'>HTML5</strong> et du langage de feuille de style <strong className='strong'>CSS3</strong></p>

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