export default function Projects() {
    return (
        <section className='projects'>
            <h3>Mes recents projets</h3>

            <div className="project_head_image">
                <img src="./src/assets/project_picture_head.jpg" alt="" />
            </div>

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
    )
}