import './index.scss';


export default function Index(){

    return(
        <main className='pagina-consultar'>

<section className='fundo-basico'> {/* Está class esta no common */}
        
        {/* A partir daqui são class's no index.css  */} 
        <div className='divprincipal'>

            <div className='consultaefoto'>
                <div className='config-consultaefoto'> 
                    <h1 className='titulo-da-consulta'>CONSULTA</h1> 
                    <img src='/image/1652835584315 (1).png' className='logo-user' alt='Elevantus'/>
                </div>
            </div>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'></label>
                    <input type='text' placeholder='Buscar por nome' className='input-Medio-BuscarNome'/>
                </div>

            <div class='input-configuracao'>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Nome Completo</label>
                    <input type='text' className='input-Medio'/>
                </div>
                
                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Plano</label>
                    <input type='text' className='input-Medio'/>
                </div>

            </div>

            <div className='input-configuracao'>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; CPF</label>
                    <input type='number' className='input-Pequeno'/>
                </div>

                <div className='caixa-input'>
                    <label for='text' classname='label-texto'>&nbsp;&nbsp; Gênero</label>
                    <input type='text' className='input-Pequeno'/>
                </div>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Data de nascimento</label>
                    <input type='number'  className='input-Pequeno'/>
                </div>
            </div>

            <div className='input-configuracao'>

                <div className='caixa-input'>
                    <label for='text'className='label-texto'>&nbsp;&nbsp; Altura</label>
                    <input type='number' className='input-Pequeno'/>
                </div>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Peso</label>
                    <input type='number' className='input-Pequeno'/>
                </div>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Telefone</label>
                    <input type='number' className='input-Pequeno'/>
                </div>

            </div> 
            
            <div className='input-configuracao'>

                <div className='caixa-input'>
                    <label for='object' className='label-texto'>&nbsp;&nbsp; Objetivos</label>
                    <textarea name='objetivos' className='caixa-de-texto-media'></textarea>
                </div>

                <div className='caixa-input'>
                    <label for='object' className='label-texto'>&nbsp;&nbsp; Observação</label>
                    <textarea name='observacoes' className='caixa-de-texto-media'></textarea>
                </div>

            </div>

            <div className='input-configuracao'>

                <div className='caixa-input'>
                    <label for='object' className='label-texto'>&nbsp;&nbsp; Treino da semana</label>
                    <textarea name='treinoSemana' className='caixa-de-texto-grande'></textarea>
                </div>

            </div>

            <div className='input-configuracao'>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Dias da semana</label>
                    <input type='text' className='input-Medio'/>                     
                </div>

                <div className='caixa-input'>
                    <label for='text' className='label-texto'>&nbsp;&nbsp; Horário</label>
                    <input type='text' className='input-Medio'/>
                </div> 
            </div>

                <div className='botoes-posicao'>
                    <button className='botao-de-salvar'>SALVAR</button>
                    <button className='botao-de-descartar'>REMOVER</button>
                </div>

        </div>

    </section>

        </main>
    )

}