import React from 'react';
import { useLocation } from 'react-router-dom';
import logo_FGA from '../img/logo_FGA_sem_fundo.png'; 
import '../styles/Header.css'; 

const navigation = [
  { name: 'Início', href: '/', },
  { name: 'Sobre', href: '/about', },
  { name: 'Turmas', href: '/classes', },
  { name: 'Contato', href: '/contact', },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul className="navigation">
          {navigation.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logo">
        <img src={logo_FGA} alt="Logo FGA" />
      </div>
    </header>
  );
}