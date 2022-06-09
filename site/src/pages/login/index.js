import { Link  } from 'react-router-dom';

import './index.scss';



export default function Index(){

    return(
        <main className='pagina-login'>
            <p>Elev.clei@gmail.com</p>
            <p>716182020</p>
            <div className='Login-Elevantus-Imagem_Email_Senha_Botao'>

                <div>
                    <img className='Login-Elevantus-Imagem' src='/image/Imagem-Login.jfif' alt='Imagem Login'/>
                </div>

                <div className='Login-Elevantu-Email_Senha_Botao'>

                    <div className='Login-Elevantu-Email'>
                        <label className='Login-Elevantu-Email_label'>Email </label>
                        <input type='text' placeholder=' example@hotmail.com' className='Login-Elevantu-Input'/>
                    </div>

                    <div className='Login-Elevantu-Senha'>
                        <label className='Login-Elevantu-Senha_label'>Senha</label>
                        <input type='password' placeholder=' ***' className='Login-Elevantu-Input'/>   
                    </div>

                    <div>
                        <Link className="Login-Elevantu-Botao" to='/menu' >ENTRAR</Link>
                    </div>

                </div>

                </div>
        </main>
    )

}