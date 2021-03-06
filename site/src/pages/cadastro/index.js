import { cadastrarCliente, enviarImagemCliente, alterarCliente, buscarPorid, buscarImagem} from '../../api/clienteApi';
import storage from 'local-storage'
import { Link } from 'react-router-dom';

import './index.scss';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Helmet from 'react-helmet';

import { toast } from 'react-toastify';



export default function Index(){

    const [nome, setNome] = useState('');
    const [plano, setPlano] = useState('');
    const [cpf, setCpf] = useState('');
    const [genero, setGenero] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [telefone, setTelefone] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [Observacao, setObservacao] = useState('');
    const [treino, setTreino] = useState('');
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    const { idParam } = useParams();

    const navegar = useNavigate();

    useEffect(() => {
        if (idParam) {
            carregarCliente();
        }
    }, [])

    async function carregarCliente() {
        const resposta = await buscarPorid(idParam);
        setNome(resposta.nome);
        setPlano(resposta.plano);
        setCpf(resposta.cpf);
        setGenero(resposta.genero);
        setNascimento(resposta.nascimento.substr(0, 10));
        setAltura(resposta.altura);
        setPeso(resposta.peso);
        setTelefone(resposta.telefone);
        setObjetivo(resposta.objetivo);
        setObservacao(resposta.observacao);
        setTreino(resposta.treino);
        setDia(resposta.dia);
        setHorario(resposta.horario);
        setImagem(resposta.imagem);
        setId(resposta.id);
    }

    function escolherImagem(){
        document.getElementById('perfilCliente').click();
    }

    function mostrarImagem(){
        if(typeof (imagem) == 'object'){ 
            return URL.createObjectURL(imagem);
        } else {
            return buscarImagem(imagem);
        }
    }
 

    async function salvarClick(){
        try{
            if(!imagem)
                throw new Error('???Imagem do Cliente Obrigat??ria');

            const usuario = storage('usuario-logado').id;

            if(id === 0){

                const novoCliente = await cadastrarCliente(nome, plano, cpf, genero, nascimento, altura, peso, telefone, objetivo, Observacao, treino, dia, horario, usuario);
                await enviarImagemCliente(novoCliente.id, imagem);

                setId(novoCliente.id);
                toast.dark('??????Cliente Cadastrado com sucesso');
                
            } else {
                await alterarCliente(id, nome, plano, cpf, genero, nascimento, altura, peso, telefone, objetivo, Observacao, treino, dia, horario, usuario);
                if(typeof(imagem) == 'object')
                    await enviarImagemCliente( id, imagem);
                
                    toast.dark('??????Cliente Alterado com sucesso');
                navegar('/consulta')
            }

        } catch(err){
            if(err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }
    

    function novoClick() {
        setId(0);
        setNome('');
        setPlano('');
        setCpf('');
        setGenero('');
        setNascimento('');
        setAltura('');
        setPeso('');
        setTelefone('');
        setObjetivo('');
        setObservacao('');
        setTreino('');
        setDia('');
        setHorario('');
        setImagem()
    }

    function voltarClick(){
        navegar('/menu');
    }



    return(
        <main  style={{backgroundColor:'#fff'}} className='pagina-cadastro'>

        <Helmet>
            <title>Cadastro | Elevantus</title>
        </Helmet>
            
            <section className='fundo-basico'> {/* Est?? class esta no common */}
        
                {/* A partir daqui s??o class's no index.css  */} 
                <div className='divprincipal'>

                <div className='Sair-Imagem' onClick={voltarClick}>
                        <img className='seta' src='/image/sair.png' alt='Porta-de-Sair' />
                        <Link to='/menu' className="Voltar">VOLTAR</Link>
                </div>

                    <div className='consultaefoto'>
                        <div className='config-consultaefoto'> 
                            <h1 style={{fontFamily: 'Font-1'}} className='titulo-da-consulta'>CADASTRO</h1> 
                            <div className='addFotoCliente' onClick={escolherImagem}>

                                {!imagem && 
                                    <img src='/image/user.png' className='logo-user' alt='Imagem Cliente'/>
                                }
                                {imagem &&
                                    <img className='Foto-Cliente' src={mostrarImagem()} alt='Foto Cliente'/>
                                }
                                
                                <input type='file' id='perfilCliente' onChange={e => setImagem(e.target.files[0])}/>
                            </div>
                        </div>
                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; Nome Completo</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'
                            value={nome} onChange={e=> setNome(e.target.value)}  />
                        </div>
                        
                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; Plano </label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'
                            value={plano} onChange={e=> setPlano(e.target.value)}/>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; CPF</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Pequeno'
                            value={cpf} onChange={e=> setCpf(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; G??nero</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Pequeno'
                            value={genero} onChange={e=> setGenero(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='date' className='label-texto'>&nbsp;&nbsp; Data de nascimento</label>
                            <input style={{fontFamily: 'Font-2'}} type='date'  className='input-Pequeno'
                            value={nascimento} onChange={e=> setNascimento(e.target.value)}/>
                        </div>
                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text'className='label-texto'>&nbsp;&nbsp; Altura</label>
                            <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'
                            value={altura} onChange={e=> setAltura(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; Peso</label>
                            <input style={{fontFamily: 'Font-2'}} type='number' className='input-Pequeno'
                            value={peso} onChange={e=> setPeso(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; Telefone</label>
                            <input style={{fontFamily: 'Font-2'}} type='tel' className='input-Pequeno' 
                            value={telefone} onChange={e=> setTelefone(e.target.value)}/>
                        </div>

                    </div> 
                    
                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='object' className='label-texto'>&nbsp;&nbsp; Objetivos</label>
                            <textarea style={{fontFamily: 'Font-2', fontSize: '1.5em'}} name='objetivos' className='caixa-de-texto-media'
                            value={objetivo} onChange={e=> setObjetivo(e.target.value)}/>
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='object' className='label-texto'>&nbsp;&nbsp; Observa????o</label>
                            <textarea style={{fontFamily: 'Font-2', fontSize: '1.5em'}} name='observacoes' className='caixa-de-texto-media'
                            value={Observacao} onChange={e=> setObservacao(e.target.value)}/>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='object' className='label-texto'>&nbsp;&nbsp; Treino da semana</label>
                            <textarea style={{fontFamily: 'Font-2' , fontSize: '1.5em'}} name='treinoSemana' className='caixa-de-texto-grande'
                            value={treino} onChange={e=> setTreino(e.target.value)}/>
                        </div>

                    </div>

                    <div className='input-configuracao'>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; Dias da semana</label>
                            <input style={{fontFamily: 'Font-2'}} type='text' className='input-Medio'
                            value={dia} onChange={e=> setDia(e.target.value)}/>                     
                        </div>

                        <div className='caixa-input'>
                            <label style={{fontFamily: 'Font-5'}} htmlFor='text' className='label-texto'>&nbsp;&nbsp; Hor??rio</label>
                            <input style={{fontFamily: 'Font-2'}} type='time' className='input-Medio'
                            value={horario} onChange={e=> setHorario(e.target.value)}/>
                        </div> 
                    </div>

                        <div className='botoes-posicao'>
                            <button style={{fontFamily: 'Font-1', padding:'1.5em 4em', borderRadius: '0.25em'}}
                             onClick={salvarClick} className='botao-de-salvar'>{id === 0 ? 'SALVAR' : "ALTERAR"}</button>&nbsp; &nbsp; &nbsp;
                            <button style={{fontFamily: 'Font-1', borderRadius: '0.25em'}}
                             onClick={novoClick} className='botao-de-novo'>NOVO</button>
                        </div>

                </div>

            </section>

        </main>
    )

}