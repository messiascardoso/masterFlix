import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/LogoMain.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink'Link
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            {/* Link faz funcionar o SPA */}
            <Link to="/">
                <img className="Logo" src={ Logo } alt ="Meflix" ></img>
            </Link>
            <Button as={ Link } className="ButtonLink" to="/cadastro/video">
                  Novo vídeo  
            </Button>
        </nav>
    );
    
}

export default Menu;//