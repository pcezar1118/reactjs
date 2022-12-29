import React from "react";
import { Link }  from 'react-router-dom';

import { AreaHeader } from './styled';

import MenuIcon from '@mui/icons-material/Menu';


function Header(){
    return(
<AreaHeader>

<div className="container">
    <MenuIcon /> 
    <div className="logo">
        <img src = "../../../favicon.ico" />

    </div>
<nav>
    <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/config">Configurações</Link></li>
        <li><Link to="/logout">Sair</Link></li>
    </ul>
</nav>
</div>

</AreaHeader>
    );
}

export default Header;