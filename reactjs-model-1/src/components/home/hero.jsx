export default function Hero() {
    return (
        <section className="hero big_sections">
            <div className="container_">
                <div className="hero_left">
                    <figure>
                        <img src="./src/assets/picture_profil.jpg" alt="hero" />
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
