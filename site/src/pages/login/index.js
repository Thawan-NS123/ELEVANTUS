import { login } from '../../api/usuarioApi'
import { useNavigate } from 'react-router-dom';

import Helmet from 'react-helmet'

import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'
import { useEffect, useRef, useState } from 'react';
import './index.scss';


export default function Index(){

    const [email, setEmail]            = useState('');
    const [senha, setSenha]            = useState('');
    const [erro, setErro]              = useState('');
    const [carregando, setCaregando]   = useState(false);

    const navegar = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('usuario-logado')){
            navegar('/menu')
        }
    }, [])

    async function entrarClink(){

        ref.current.continuousStart();

        setCaregando(true);

        try {

            const resposta = await login(email, senha);
            storage('usuario-logado', resposta)

            setTimeout(() => {
                navegar('/menu');
            }, 2000);


            
        } catch (err) {

            ref.current.complete();
            setCaregando(false);
         
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }

        }
    }


    return(
            
        <main className="Page-Login">

        <Helmet>
            <title>Login | Elevantus</title>
        </Helmet>
        <LoadingBar color='#ff3d00' ref={ref} />

            <div className="Login-Elevantus">
        
                <img src="/image/img-login.jpg" className='Login-Elevantus-Imagem_login' alt="Image-Login"/>
        
                <div className="Login-Elevantus-Informacoes_logo_email_e_senha_e_botao">
        
                    <div className="Login-Elevantus-Informacoes_logo">
                        <img className="Logo" src="/image/1652835584315 (1).png" alt="Logo-Elevantus"/>
                    </div>

                    <div >
                        <h5 className='credencias_invalidas' > {erro} </h5>
                    </div>
        
                    <div className="Login-Elevantus-Informacoes_email">
                        <label style={{fontFamily: 'Font-5'}} className="Login-Elevantus-Informacoes_label" for="email">&nbsp; Email</label>
                        <input style={{fontFamily: 'Font-2'}} className="Login-Elevantus-Informacoes_input" type="email"
                        placeholder=' example@hotmail.com' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
        
                    <div className="Login-Elevantus-Informacoes_senha">
                        <label style={{fontFamily: 'Font-5'}} className="Login-Elevantus-Informacoes_label" for="Senha">&nbsp; Senha</label>
                        <input style={{fontFamily: 'Font-2'}} className="Login-Elevantus-Informacoes_input" type="password"
                        placeholder=' ***' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
        
                    <div className="Login-Elevantus-Informacoes_botao">
                        <button style={{fontFamily: 'Font-1'}} onClick={entrarClink}
                                disabled={carregando}>ENTRAR</button>
                    </div>
                </div>
        
            </div>
            
        </main>
    )

}