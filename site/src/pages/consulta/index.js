import { buscarPorCpf } from '../../api/clienteApi';

import { useState } from 'react'

import './index.scss';


export default function Index(){

    const [filtro, setFiltro] = useState('');

    async function filtrar(){
        const resp = await buscarPorCpf(filtro);
        setFiltro(resp);
    }

    return(
        <main className='pagina-consultar'>

<section className='fundo-basico'> {/* Está class esta no common */}
        
        {/* A partir daqui são class's no index.css  */} 
        <div className='divprincipal'>

            <div className='consultaefoto'>
                <div className='config-consultaefoto'> 
                    <h1 style={{fontFamily: 'Font-1'}} className='titulo-da-consulta'>CONSULTA</h1> 
                    <img src='/image/1652835584315 (1).png' className='logo-user' alt='Elevantus'/>
                </div>
            </div>

                <div className='caixa-input'>
                    <label for='search' className='label-texto'></label>
                    <input type='text' placeholder='Buscar por nome' className='input-Medio-BuscarNome'
                    value={filtro} onChange={e => setFiltro( e.target.value ) }
                    onClick={filtrar}/>
                </div>

            <div>

                <div class='input-configuracao'>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Nome Completo</label>
                        <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'/>
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Plano</label>
                        <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'/>
                    </div>

                    </div>

                    <div className='input-configuracao'>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; CPF</label>
                        <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'/>
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' classname='label-texto'>&nbsp;&nbsp; Gênero</label>
                        <input style={{fontFamily: 'Font-2'}} type='text' className='input-Pequeno'/>
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Data de nascimento</label>
                        <input style={{fontFamily: 'Font-2 '}} type='date'  className='input-Pequeno'/>
                    </div>
                    </div>

                    <div className='input-configuracao'>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text'className='label-texto'>&nbsp;&nbsp; Altura</label>
                        <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'/>
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Peso</label>
                        <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'/>
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Telefone</label>
                        <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'/>
                    </div>

                    </div> 

                    <div className='input-configuracao'>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='object' className='label-texto'>&nbsp;&nbsp; Objetivos</label>
                        <textarea name='objetivos' style={{fontFamily: 'Font-2'}} className='caixa-de-texto-media'></textarea>
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='object' className='label-texto'>&nbsp;&nbsp; Observação</label>
                        <textarea style={{fontFamily: 'Font-2'}} name='observacoes' className='caixa-de-texto-media'></textarea>
                    </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='object' className='label-texto'>&nbsp;&nbsp; Treino da semana</label>
                            <textarea style={{fontFamily: 'Font-2'}} name='treinoSemana' className='caixa-de-texto-grande'></textarea>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Dias da semana</label>
                        <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'/>                     
                    </div>

                    <div className='caixa-input'>
                        <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Horário</label>
                        <input style={{fontFamily: 'Font-2'}} type='time' className='input-Medio'/>
                    </div> 
                    </div>

                    </div>

            </div>

            <div className='botoes-posicao'>
                    <button className='botao-de-salvar'>SALVAR</button>
                    <button className='botao-de-descartar'>REMOVER</button>
            </div>

    </section>

        </main>
    )

}