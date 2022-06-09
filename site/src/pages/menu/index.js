import { Link } from 'react-router-dom';
import './index.scss';



export default function Index(){

    return(
        <main className='pagina-menu'>
                <section className='faixa-menu'>
                    <div className="parte-esquerda">

                        <div className="texto-menu">
                            <p className="paragrafo-menu">Bem vindo a area do menu, para onde você deseja ir ?</p>
                        </div>
                        
                    </div>
                    <div className="parte-direita">

                        <div className="perfil-cleiton">
                            <p className="nome-cleiton">Cleiton Tonarge Silva</p>
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