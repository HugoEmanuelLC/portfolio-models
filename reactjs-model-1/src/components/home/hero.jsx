export default function Hero() {
    return (
        <section className="hero big_sections">
            <div className="container_">
                <div className="hero_left">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/10264664/screenshots/17342535/media/0d3eaec278b7e7c3bf43dbcc8f76c8f2.jpg?resize=400x300&vertical=center" alt="hero" />
                    </figure>

                    <div className="infos">
                        <h1>Hugo Clavinas</h1>
                        <h2>Développeur web apps - mobile</h2>
                        <div className="links">
                            <ul>
                                <li><a href=""><i class='bx bxl-linkedin-square'></i></a></li>
                                <li><a href=""><i class='bx bxl-github'></i></a></li>
                                <li><a href=""><i class='bx bxs-briefcase'></i></a></li>
                                    
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hero_right">
                    <button type="button"><i class='bx bx-message-rounded-dots'></i> Contactez-moi</button>
                </div>
            </div>
        </section>
    )
}
