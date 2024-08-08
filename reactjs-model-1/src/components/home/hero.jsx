import React, { useState } from 'react';

export default function Hero() {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

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
                                <li><a href="https://www.linkedin.com/in/hugoclavinas/"><i class='bx bxl-linkedin-square'></i></a></li>
                                <li><a href="https://github.com/HugoEmanuelLC/"><i class='bx bxl-github'></i></a></li>
                                <li><a href="https://hugoclavinas.com/src/documents/CV-2024-hugoclavinas.pdf"><i class='bx bxs-briefcase'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {modal && <Modal setModal={setModal} />}

                <div className="hero_right">
                    <button type="button" onClick={openModal}><i class='bx bx-message-rounded-dots'></i> Contactez-moi</button>
                </div>
            </div>
        </section>
    )
}


function Modal({setModal}){
    const [email, setEmail] = useState('');
    const [Objet, setObjet] = useState('');
    const [message, setMessage] = useState('');

    const [erreur, setErreur] = useState("");
    const [msg, setMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let verifyEmail = true;

        if (email === "" || Objet === "" || message === "") {
            setErreur(true);
            setMsg('Veuillez remplir tous les champs.');
        } else {
            if(verifyEmail){
                setErreur(false);
                setMsg('Message envoyé avec succès !');
            }else{
                setErreur(true);
                setMsg('Erreur lors de l\'envoie du message.');
            }
        }

        setEmail('');
        setObjet('');
        setMessage('');
    }

    const handleCloseModal = () => {
        setMsg('');
        setModal(false);
    }

    let input_style_erreur = {
        border: '1px solid red'
    }

    return(
        <div className="modal_mail">
            <div className="modal_content modal_content_on">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2>Nouveau message</h2>
                <form>
                    <div>
                        <label for="email">Mail:</label>
                        <input type="email" id="email" name="email" 
                            placeholder="Votre email..."
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="name">Objet: </label>
                        <input type="text" id="name" name="name" 
                            placeholder="Objet..."
                            value={Objet}
                            onChange={(e)=>setObjet(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea id="message" name="message" 
                            placeholder="Votre message..."
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    {msg != "" ? erreur != true ? <p style={{color:'white'}}>{msg}</p> : <p style={{color:'black'}}>{msg}</p> : null}
                    <button type="submit" onClick={(e)=>handleSubmit(e)}>Envoyer</button>
                </form>
            </div>
        </div>
    )
}