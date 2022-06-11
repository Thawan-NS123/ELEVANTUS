import { cadastrarCliente } from '../../api/clienteApi';
import storage from 'local-storage'

import './index.scss';
import { useState } from 'react';

import { toast } from 'react-toastify';


export default function Index(){

    const [nome, setNome] = useState('');
    const [plano, setPlano] = useState('');
    const [cpf, setCpf] = useState('');
    const [genero, setGenero] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [telefone, setTelefone] = useState('');
    const [objetivo, setObjetivo] = useState();
    const [Observacao, setObservacao] = useState('');
    const [treino, setTreino] = useState('');
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');

    async function salvarClick(){
        try{
            const usuario = storage('usuario-logado').id;

            const resposta = await cadastrarCliente(nome, plano, cpf, genero, nascimento, altura, peso, telefone, objetivo, Observacao, treino, dia, horario, usuario)

            toast.dark('Cliente Cadastrado com sucesso');
        } catch(err){
            toast.error(err.message);
        }
    }

    return(
        <main className='pagina-cadastro'>
            
            <section className='fundo-basico'> {/* Está class esta no common */}
        
                {/* A partir daqui são class's no index.css  */} 
                <div className='divprincipal'>

                    <div className='consultaefoto'>
                        <div className='config-consultaefoto'> 
                            <h1 style={{fontFamily: 'Font-1'}} className='titulo-da-consulta'>CADASTRO</h1> 
                            <img src='/image/1652835584315 (1).png' className='logo-user' alt='Elevantus'/>
                        </div>
                    </div>

                    <div class='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Nome Completo</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'
                            value={nome} onChange={e=> setNome(e.target.value)}/>
                        </div>
                        
                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Plano </label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'
                            value={plano} onChange={e=> setPlano(e.target.value)}/>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; CPF</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Pequeno'
                            value={cpf} onChange={e=> setCpf(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' classname='label-texto'>&nbsp;&nbsp; Gênero</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Pequeno'
                            value={genero} onChange={e=> setGenero(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='date' className='label-texto'>&nbsp;&nbsp; Data de nascimento</label>
                            <input style={{fontFamily: 'Font-2'}} type='date'  className='input-Pequeno'
                            value={nascimento} onChange={e=> setNascimento(e.target.value)}/>
                        </div>
                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text'className='label-texto'>&nbsp;&nbsp; Altura</label>
                            <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'
                            value={altura} onChange={e=> setAltura(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Peso</label>
                            <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'
                            value={peso} onChange={e=> setPeso(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Telefone</label>
                            <input style={{fontFamily: 'Font-2'}} type='tel' className='input-Pequeno' 
                            value={telefone} onChange={e=> setTelefone(e.target.value)}/>
                        </div>

                    </div> 
                    
                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='object' className='label-texto'>&nbsp;&nbsp; Objetivos</label>
                            <textarea style={{fontFamily: 'Font-2', fontSize: '1.5em'}} name='objetivos' className='caixa-de-texto-media'
                            value={objetivo} onChange={e=> setObjetivo(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='object' className='label-texto'>&nbsp;&nbsp; Observação</label>
                            <textarea style={{fontFamily: 'Font-2', fontSize: '1.5em'}} name='observacoes' className='caixa-de-texto-media'
                            value={Observacao} onChange={e=> setObservacao(e.target.value)}/>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='object' className='label-texto'>&nbsp;&nbsp; Treino da semana</label>
                            <textarea style={{fontFamily: 'Font-2' , fontSize: '1.5em'}} name='treinoSemana' className='caixa-de-texto-grande'
                            value={treino} onChange={e=> setTreino(e.target.value)}/>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Dias da semana</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'
                            value={dia} onChange={e=> setDia(e.target.value)}/>                     
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} for='text' className='label-texto'>&nbsp;&nbsp; Horário</label>
                            <input style={{fontFamily: 'Font-2'}} type='time' className='input-Medio'
                            value={horario} onChange={e=> setHorario(e.target.value)}/>
                        </div> 
                    </div>

                        <div className='botoes-posicao'>
                            <button style={{fontFamily: 'Font-1'}} onClick={salvarClick}
                             className='botao-de-salvar'>SALVAR</button>
                        </div>

                </div>

            </section>

        </main>
    )

}