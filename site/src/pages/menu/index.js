import storage from 'local-storage'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';
import './index.scss';

export default function Index(){

    const [usuario, setUsuario] = useState('Thawan Nascimento Silva');

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
        <main className='pagina-menu'>
                <section className='faixa-menu'>
                    <div className="parte-esquerda">

                        <div className="texto-menu">
                            <p className="paragrafo-menu">Bem vindo a area do menu, para onde você deseja ir ?</p>
                            <p onClick={sairClick} className="paragrafo-sair">Voltar</p>
                        </div>
                        
                    </div>
                    <div className="parte-direita">

                        <div className="perfil-cleiton">
                            <p className="nome-cleiton">{usuario}</p>
                            <img src="/image/cleiton.jpg" width="70em" alt='imagem-fundo' styled='border-radius: 9em;' />
                        </div>

                        <div className="botoes-link">
                            <Link className="botao-cadastro" to='/cadastro'>Cadastro</Link>
                            <Link className="botao-consulta" to='/consulta'>Consulta</Link>
                        </div>

                    </div>
                </section>
        </main>
    )

}