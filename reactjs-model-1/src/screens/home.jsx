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
                    <p>En pleine reconversion professionnel, je suis aujourd'hui à la recherche de mon premier emploi comme développeur.


Passionné par la technologie depuis mon plus jeune âge, j'ai décidé de changer de carrière en 2018 pour devenir développeur web.


Je sors d'un stage où j'ai eu le plaisir de créer une application Android et IOS de zéro, un réseau social avec authentification, publications entre autres, réalise en React Native Expo et à l’aide Appwrite pour le backend.


En plus de devoir configurer le DNS ainsi que la configuration d'un VPS.


En pleine reconversion professionnelle, je me suis formé en tant que développeur web apps ces derniers années. Je suis apte à travailler en tant que frontend ainsi qu’en backend. Motivé et prêt à affronter tous les défis.


Au cours de ma formation chez Becode (ma 3éme formation), j'ai acquis les compétences techniques nécessaires pour devenir un développeur web compétent. Je maîtrise les langages de programmation HTML, CSS et JavaScript, ainsi que les Framework frontend et backend les plus populaires.


Je suis également un développeur web créatif et curieux. J'aime explorer de nouvelles technologies et techniques. Je suis toujours à la recherche de nouvelles façons de coder et de créer des sites web et des applications innovants.


Je suis convaincu que j'ai les compétences et la motivation nécessaires pour réussir dans le domaine du développement web. Je suis impatient de mettre mes compétences en pratique et de contribuer à la création de projets stimulants et gratifiants.</p>
                </section>

                <Projects />

                <section className='Experience'>
                    <h3>Experiences professionnelle</h3>
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

                <Skills />

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