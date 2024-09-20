import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import '../Contact/contact.css'

export default function Contact() {
    const location = useLocation();
    const pathname = location.pathname;

    const emailSecretariat = "unbgama@unb.br"
    const emailCoordenation = "coordenacaofga@unb.br"
    const emailTeacher = "vcastro@unb.br"
    
    if (pathname === '/contact') {
        return (
            <div>
                <Header></Header>
                <main className='container_contact_page'>
                    <section className='section-information-page'>
                        <h1 className='title'>Contatos</h1>
                        <p className='description'>
                            Esta página destina-se a informar sobre os contatos relacionados à disciplina de Humanidade e Cidadania - FGA0164.
                        </p>
                    </section>
                    <section className='section-contacts'>
                        <div className='contact-group'>
                        <img src="" alt="" />
                            <h2 className='contact-title'>FGA</h2>
                            <ul className='contact-list'>
                                <li><p>Email da Secretaria: <a href={`mailto:${emailSecretariat}`} target='blank'>{emailSecretariat}</a></p></li>
                                <li><p>Email da Coordenação: <a href={`mailto:${emailCoordenation}`} target='blank'>{emailCoordenation}</a></p></li>
                            </ul>
                        </div>
                        <div className='contact-group'>
                            <h2 className='contact-title'>Professora</h2>
                            <ul className='contact-list'>
                                <li><p>Email: <a href={`mailto:${emailTeacher}`}>{emailTeacher}</a></p></li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        );
    } else { 
//pra ajudar na depuração
        return (
            <div>
                <Header></Header>
                <p>route actual: {pathname}</p>
                <div>your code is wrong</div>
            </div>
        );
    }
}
