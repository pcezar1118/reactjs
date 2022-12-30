import React from "react";
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom';

import { AreaLogin } from './styled';

import { BtnDefaultIcons } from '../../Components/Styled';
import { BtnDefault } from '../../Components/Styled';


import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


export default () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/registrar">
            <AreaLogin>
            <h1 className="organize">
                <Link to className="/"><MenuOpenIcon /></Link>
                Crie sua conta</h1>

            <p>Crie sua conta, é grátis!</p>
            </AreaLogin>
            <form>
                <div className="form-input">
                    <label>Nome</label>
                    <input type="text" />
                </div>
            </form>
        
            <form>
                <div className="form-input">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
            </form>
            
            <form>
                <div className="form-input">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            </form>
            
            </Route>
        

            <Route exact path="/*">
            <AreaLogin>
        <h1>Faça login em sua conta</h1>
        
        <BtnDefaultIcons>
            <FacebookIcon />
            <div className="center">Fazer login com o Facebook</div>
            </BtnDefaultIcons>
        
            <BtnDefaultIcons>
            <GoogleIcon />
            <div className="center">Fazer login com o Google</div>
            </BtnDefaultIcons>

            <p>OU</p>

            <form>
                <div className="form-input">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
            </form>
        
            <form>
                <div className="form-input">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            </form>

            <BtnDefault>Comece agora!</BtnDefault>

            <div className="footerLogin">Não tem uma conta? 
            <Link to="/registrar">Fazer login</Link>
            </div>
        
        </AreaLogin>
</Route>
        </Switch>
        <AreaLogin>
        <h1>Faça login em sua conta</h1>
        
        <BtnDefaultIcons>
            <FacebookIcon />
            <div className="center">Fazer login com o Facebook</div>
            </BtnDefaultIcons>
        
            <BtnDefaultIcons>
            <GoogleIcon />
            <div className="center">Fazer login com o Google</div>
            </BtnDefaultIcons>

            <p>OU</p>

            <form>
                <div className="form-input">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
            </form>
        
            <form>
                <div className="form-input">
                    <label>Senha</label>
                    <input type="password" />
                </div>
            </form>

            <BtnDefault>Entrar</BtnDefault>

            <div className="footerLogin">Não tem uma conta? 
            <Link to="/registrar">Registre-se</Link>
            </div>
        
        </AreaLogin>
        </BrowserRouter>
    );
}