import React, { useState, useRef } from 'react';

import { sendMail } from '../../scripts/sendMail';

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
                                <li><a href="https://www.linkedin.com/in/hugoclavinas/"><i className='bx bxl-linkedin-square'></i></a></li>
                                <li><a href="https://github.com/HugoEmanuelLC/"><i className='bx bxl-github'></i></a></li>
                                <li><a href="https://hugoclavinas.com/src/documents/CV-2024-hugoclavinas.pdf"><i className='bx bxs-briefcase'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {modal && <Modal setModal={setModal} />}

                <div className="hero_right">
                    <button type="button" onClick={openModal}><i className='bx bx-message-rounded-dots'></i> Contactez-moi</button>
                </div>
            </div>
        </section>
    )
}


function Modal({setModal}){
    const [email, setEmail] = useState('');
    const [emailErrorStyle, setEmailErrorStyle] = useState(false);
    
    const [objet, setObjet] = useState('');
    const [objetErrorStyle, setObjetErrorStyle] = useState(false);

    const [message, setMessage] = useState('');
    const [messageErrorStyle, setMessageErrorStyle] = useState(false);

    const [erreur, setErreur] = useState("");
    const [msg, setMsg] = useState(false);

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // let verifyEmail = true;

        if (email === "" || objet === "" || message === "") {
            setErreur(true);
            setMsg('Veuillez remplir tous les champs.');

            email === "" || !email.includes('@') || !email.includes('.')  ? setEmailErrorStyle(true) : setEmailErrorStyle(false);
            objet === "" ? setObjetErrorStyle(true) : setObjetErrorStyle(false);
            message === "" ? setMessageErrorStyle(true) : setMessageErrorStyle(false);
            return;

        } else {
            if (!email.includes('@') || !email.includes('.')) {
                setEmailErrorStyle(true)
                return;
            } else {
                // Envoie du mail, tout est ok
                let verifyEmail = sendMail(form.current)
                .then((reponse) => {
                    if(reponse == 'OK'){
                        setErreur(false);
                        setMsg('Message envoyé avec succès !');
                    }else{
                        setErreur(true);
                        setMsg('Erreur lors de l\'envoie du message.');
                    }
                })
            }
        }
        setEmailErrorStyle(false)
        setObjetErrorStyle(false)
        setMessageErrorStyle(false)
        setEmail('');
        setObjet('');
        setMessage('');
    }

    const handleCloseModal = () => {
        setMsg('');
        setModal(false);
    }

    return(
        <div className="modal_mail">
            <div className="modal_content modal_content_on">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                {msg != "" ? erreur != true ? <p style={{color:'greenyellow'}}>{msg}</p> : <p style={{color:'darkred'}}>{msg}</p> : null}
                <h2>Nouveau message</h2>
                <form ref={form}>
                    <div>
                        <label htmlFor="email">Mail:</label>
                        {emailErrorStyle && <p style={{color:'darkred'}}>Veuillez entrer un email valide.</p>}
                        <input type="email" id="email" name="email_from" 
                            placeholder="Votre email..."
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Objet: </label>
                        {objetErrorStyle && <p style={{color:'darkred'}}>Veuillez entrer un objet valide.</p>}
                        <input type="text" id="name" name="objet_from" 
                            placeholder="Objet..."
                            value={objet}
                            onChange={(e)=>setObjet(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        {messageErrorStyle && <p style={{color:'darkred'}}>Veuillez entrer un message valide.</p>}
                        <textarea id="message" name="message" 
                            placeholder="Votre message..."
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" onClick={(e)=>handleSubmit(e)}>Envoyer</button>
                </form>
            </div>
        </div>
    )
}