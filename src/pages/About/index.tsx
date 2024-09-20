import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import '../About/about.css';
import teacher_image  from '../../img/Vanessa_image.png';

export default function Contact() {
    const location = useLocation();
    const pathname = location.pathname;

    if (pathname === '/about') {
        return (
            <div>
                <Header></Header>
                <div className='about_page'>
                    <main className='container_about_page'>
                        <h1 className='titles_about'>Sobre</h1>
                        <p> O objetivo desta página destina-se a apresnetar informações sobre a professora ministradora de Humanidades e Cidadania e da própria disciplina, aqui você encontrará curiosidades e informações úteis sobre a matéria </p>
                        <section className="about_teacher">
                            <img className="img_about_page" src={teacher_image} alt="imagem da professora Vanessa." />
                            <div className='textual_info_teacher'>
                                <div>
                                    <h1 className='titles_about'>Vanessa de Castro</h1>
                                    <h3 className='subtitles_about'> Doutora em desenvolvimento sustentável </h3>
                                </div>
                                <p>
                                Professora na <strong>Universidade de Brasília (UnB)</strong>, doutora em Desenvolvimento Sustentável pela UnB, com parte da pesquisa realizada na <strong>Universidade de Oxford</strong>. Possui mestrado em Educação pela <strong>Universidade de Reading</strong>, Inglaterra, e graduação em Geografia pelo <strong>Centro Universitário de Brasília</strong>.
                                Além disso, fez Pós-Doutorado na Ecole des Hautes Études en Sciences Sociales, em Paris, com o tema "Crise da Civilização e a extrema direita no Brasil". Na UnB, ocupou cargos de liderança, incluindo Chefe de Gabinete e Assessora do Vice-Reitor, coordenou programas no Centro de Desenvolvimento Sustentável (CDS) e na Pós-Graduação em Direitos Humanos e Cidadania (PPGDH/CEAM). Sua pesquisa abrange direitos humanos, meio ambiente, políticas públicas, educação, desigualdade, gênero, raça, pobreza e temas relacionados à psicanálise, especialmente o sofrimento do sujeito na contemporaneidade.
                                </p>
                            </div>
                        </section>
                        <section className='about_discipline'>
                            <div className='textual_info_discipline'>
                                <div>
                                    <h1 className='titles_about'>Disciplina</h1>
                                    <h3 className='subtitles_about'>Humanides e cidadania - FGA0164</h3>
                                </div>
                                <h2>Ementa</h2>
                                <p>
                                    Disciplina obrigatório do curso de Engenharias da Universidade de Brasília. No atual cenário global, caracterizado por desafios complexos e interconectados, a integração
                                    das ciências sociais na formação em engenharia emerge como uma necessidade premente.Esta
                                    disciplina se propõe a explorar a essencialidade das humanidades e da cidadania na prática da
                                    engenharia, destacando como o conhecimento crítico em ciências sociais contribui decisivamente
                                    para a formação de engenheiros aptos a responder às demandas da sociedade. Abrangendo áreas
                                    das das ciências sociais este curso se aprofunda nas diversas facetas das interações humanas,
                                    enfatizando a importância da construção de uma sociedade com justiça social.
                                    As ciências sociais são cruciais para identificar e avaliar as estruturas de poder presentes na
                                    sociedade, influenciando diretamente na política, cultura e dinâmicas sociais.
                                    Esta disciplina proporciona um olhar crítico sobre temas como gênero, raça, etnia, e
                                    desigualdade, destacando o papel transformador das ciências sociais em desafiar normas
                                    estabelecidas e promover a inclusão com justiça social.
                                    Além disso, com a crise sanitária global, ressalta-se a importância das ciências sociais em
                                    examinar as implicações da tecnologia na sociedade, iluminando as desigualdades no acesso e
                                    benefícios da inovação tecnológica.
                                </p>
                                <h2>Objetivos gerais da disciplina</h2>
                                <p>
                                O objetivo desta página destina-se a apresnetar informações sobre a professora ministradora de Humanidades e Cidadania e da própria disciplina, aqui você encontrará curiosidades e informações úteis sobre a matéria 
                                </p>
                                <ul>
                                    <li>plano de ensino:</li>
                                    <li>Grupo da disciplina no teams:</li>
                                </ul>
                            </div>
                            <img className='img_about_page' src="https://noticias.unb.br/images/Noticias/2023/08-Ago/20230414_campus-fga_betomonteiro3.jpg" alt="imagem de uma sala." />
                        </section>
                    </main>
                                </div>
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
