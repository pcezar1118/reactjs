import React from "react";
import { Link }  from 'react-router-dom';

import { AreaHeader } from './styled';

import MenuIcon from '@mui/icons-material/Menu';


function Header(props){
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

    <div className="avatar">
        <img src={props.user.avatar} />
        <label>{props.user.name}</label>
    </div>
</nav>
</div>

</AreaHeader>
    );
}

export default Header;