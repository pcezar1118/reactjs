import React from "react";
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom';

import Api from '../../Api';

import { AreaLogin } from './styled';

import { BtnDefaultIcons } from '../../Components/Styled';
import { BtnDefault } from '../../Components/Styled';


import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }
    
    return(
        
        <BrowserRouter>
        <Switch>
            <Route exact path="/registrar">
            <AreaLogin>
            <h1 className="organize">
                <Link to="/"><MenuOpenIcon /></Link>
                Crie sua conta</h1>

            <p>Crie sua conta, é grátis!</p>
            
            <form>
                <div className="form--imput">
                    <label>Nome</label>
                    <input type="text" />
                </div>
            </form>
        
            <form>
                <div className="form--imput">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
            </form>
            
            <form>
                <div className="form--imput">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            
            <BtnDefault>Comece agora!</BtnDefault>

            <div className="footerLogin">Já tem uma conta? 
            <Link to="/">Fazer login!</Link>
            </div>
            </form>
         </AreaLogin>   
            </Route>
        
        
           <Route exact path="/*">
            <AreaLogin>
        <h1>Faça login em sua conta</h1>
        
        <BtnDefaultIcons>
            <FacebookIcon />
            <div className="center">Fazer login com o Facebook</div>
            </BtnDefaultIcons>
        
            <BtnDefaultIcons onClick={actionLoginGoogle}>
            <GoogleIcon />
            <div className="center">Fazer login com o Google</div>
            </BtnDefaultIcons>

            <p>OU</p>

            <form>
                <div className="form--imput">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
            </form>
        
            <form>
                <div className="form--imput">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            </form>

            <BtnDefault>Fazer login!</BtnDefault>

            <div className="footerLogin">Não tem uma conta? 
            <Link to="/registrar">Registre-se</Link>
            </div>
        
        </AreaLogin>
</Route>
</Switch>
    
        </BrowserRouter>
    );
}