import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import '../../styles/contact.css'

export default function Contact() {
    const location = useLocation();
    const pathname = location.pathname;

    const emailSecretariat = "unbgama@unb.br"
    const emailCoordenation = "coordenacaofga@unb.br"
    const emailTeacher = "vcastro@unb.br"
    // Condição para verificar o pathname
    if (pathname === '/contact') {
        return (
            <div>
                <Header></Header>
                <main className='container'>
                    <section className='section-information-page'>
                        <h1 className='title'>Contatos</h1>
                        <p className='phrase'>Está página é destinada a informar os contatos que tangem a disciplina de Humanidade e cidadanias- FGA0164 </p>
                        
                    </section>
                    <section className='section-contacts'>
                        <div className='container-fga'>
                            <h2>FGA</h2>
                            <p>email secretaria:    {emailSecretariat}</p>
                            <p>email coordenação:   {emailCoordenation}</p>
                        </div>
                        <div className='container-teacher'>
                            <h2>PROFESSORA</h2>
                            <p>email:               {emailTeacher}</p>
                        </div>
                    </section>

                </main>
            </div>
        );
    } else {

        return (
            <div>
                <Header></Header>
                <p>route actual: {pathname}</p>
                <div>your code is wrong</div>
            </div>
        );
    }
}
