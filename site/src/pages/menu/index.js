import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import  Helmet  from 'react-helmet';

import { Link } from 'react-router-dom';
import './index.scss';

export default function Index(){

    const [usuario, setUsuario] = useState('-');

    const navegar = useNavigate();

    useEffect(() => {
        if(!storage('usuario-logado')){
            navegar('/login')
        } else {
            const usuarioLogado = storage('usuario-logado')
            setUsuario(usuarioLogado.nome);
        }
    },[])


    function sairClick(){
        storage.remove('usuario-logado');
        navegar('/login');
    }

    return(


        <main className="pagina-menu">

            <Helmet>
                <title>Menu | Elevantus</title>
            </Helmet>

                <div className="Elevantus-Seja_Bem_Vindo-Sair">
                    <h2 className="Seja_Bem_Vindo">Seja Bem vindo a area do menu, para onde você deseja ir ?</h2>
                    <div className='Sair-Imagem' onClick={sairClick}>
                        <img className='Porta' src='/image/sair.png' alt='Porta-de-Sair' />
                        <Link to='/login' className="Sair">SAIR</Link>
                    </div>
                </div>

                <div className="Elevantus-Usuario_Cadastro_Consulta">
                    <div className="Elevantus-Usuario">
                        <p className="usuario">{usuario}</p>
                        <img className="usuario-imagem" src="/image/cleiton.jpg" alt='Foto-Perfil'/>
                    </div>
                    <div className="Elevantus-Botoes">
                        <Link className="Botao-Cadastro"to='/cadastro'>Cadastro</Link>
                        <Link className="Botao-Consulta"to='/consulta'>Consulta</Link>
                    </div>
                </div>

        </main>
    )

}