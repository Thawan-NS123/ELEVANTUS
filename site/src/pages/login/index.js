import { login } from '../../api/usuarioApi'
import { useNavigate } from 'react-router-dom';

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
        <main className='pagina-login'>
            <LoadingBar color='#ff3d00' ref={ref} />

            <p>Elev.clei@gmail.com</p>
            <p>716182020</p>
            <div className='Login-Elevantus-Imagem_Email_Senha_Botao'>

                <div>
                    <img className='Login-Elevantus-Imagem' src='/image/Imagem-Login.jfif' alt='Imagem Login'/>
                </div>

                <div className='Login-Elevantu-Email_Senha_Botao'>

                    <div>
                        <h5 className='credencias_invalidas' > {erro} </h5>
                    </div>

                    <div className='Login-Elevantu-Email'>
                        <label className='Login-Elevantu-Email_label'>Email </label>
                        <input type='text' placeholder=' example@hotmail.com' className='Login-Elevantu-Input'
                        value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='Login-Elevantu-Senha'>
                        <label className='Login-Elevantu-Senha_label'>Senha</label>
                        <input type='password' placeholder=' ***' className='Login-Elevantu-Input'
                        value={senha} onChange={e => setSenha(e.target.value)}/>   
                    </div>

                    <div>
                        <button className="Login-Elevantu-Botao" onClick={entrarClink}
                                disabled={carregando} >ENTRAR</button>
                    </div>

                </div>

                </div>
        </main>
    )

}