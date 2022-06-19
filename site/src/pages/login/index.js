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

        <main className="pagina-login">

        <Helmet>
            <title>Login | Elevantus</title>
        </Helmet>

        <LoadingBar color='#ff3d00' ref={ref} />

            <img className="Imagem-Flexão" src="/image/img-login.jpg" alt="Flexão"/>

            <div className="Login-Elevantus">

                <img className="Logo" src="/image/1652835584315 (1).png" alt="Logo"/>

                <h3 className='Credencias-invalidas' > {erro} </h3>

                <div className="Informacoes-login">
                    <div className="Informacoes-Email">
                        <label style={{fontFamily: 'Font-1'}} for="Email">Email</label>
                        <input style={{fontFamily: 'Font-1'}} placeholder="example@hotmail.com" type="email"
                         value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="Informacoes-Senha">
                        <label style={{fontFamily: 'Font-1'}} for="password">Senha</label>
                        <input style={{fontFamily: 'Font-1'}} placeholder="***" type="password"
                         value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                </div>

                <button style={{fontFamily: 'Font-1'}} onClick={entrarClink}
                 disabled={carregando}>ENTRAR</button>

            </div>

        </main>
    )

}