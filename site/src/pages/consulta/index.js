import { listarTodosFilmes, buscarPorNome, deletarCliente } from '../../api/clienteApi';

import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { confirmAlert } from 'react-confirm-alert'
import  Helmet  from 'react-helmet';
import { Link } from 'react-router-dom';

import './index.scss';

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'


export default function Index(){

    const [cliente, setCliente] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [usuario, setUsuario] = useState('-');

    const navigate = useNavigate();

    useEffect(() => {
        if(storage('usuario-logado')){
            const usuarioLogado = storage('usuario-logado')
            setUsuario(usuarioLogado.nome);
        }
    },[])


    async function filtrar(){
        const resp = await buscarPorNome(filtro);
        setCliente(resp);
    }


    function editarCliente(id) {
        navigate(`/alterar/${id}`)
    }



    async function excluirClienteClick(id, nome) {

        confirmAlert({
            title: 'Excluir cliente',
            message: `Deseja excluir o cliente ${nome}`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await deletarCliente(id, nome);
                        if(filtro === '')
                        carregarTodosFilmes();
                        else
                            filtrar();

                        toast.dark('Cliente removido');
                    }
                },
                {
                    label: 'Não',
                }
            ]
        })

        
    }



    async function carregarTodosFilmes(){
        const resp = await listarTodosFilmes();
        setCliente(resp);
    }

    useEffect(() => {
        carregarTodosFilmes();
    }, [])



    return(
<main className='pagina-consultar'>

        <Helmet>
            <title>Consulta | Elevantus</title>
        </Helmet>

    <header>
            <div className='consultaefoto'>
                <div className='config-consultaefoto'> 
                    <h2 style={{fontFamily: 'Font-1'}} className='titulo-da-consulta'>CONSULTA</h2> 
                    <div className='perfil'>
                        <p className="usuario">{usuario}</p>
                        <img src='/image/cleiton.jpg' className='logo-user' alt='Elevantus'/>
                    </div>
                </div>
            </div>     
    </header>

    <section className='fundo-basico'> {/* Está class esta no common */}

    <Link to='/menu' className='Sair-Imagem' >
                        <img className='seta' src='/image/sair.png' alt='Porta-de-Sair' />
                        <p className="Voltar">VOLTAR</p>
                </Link>
        
        {/* A partir daqui são class's no index.css  */} 
        <div className='divprincipal'>




            <div className='conteudo-consulta'>

                <div className='caixa-input'>
                    <input type='text' placeholder='Buscar por Nome' className='input-Medio-BuscarNome'
                    value={filtro} onChange={e => setFiltro(e.target.value) }/>
                    <button onClick={filtrar}>Buscar</button>
                </div>

                    <div className='responsividade-tabela'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOME</th>
                                    <th>CPF</th>
                                    <th>PLANO</th>
                                    <th>DIA</th>
                                    <th>HORA</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {cliente.map(item =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.nome.substr(0, 15)}</td>
                                            <td className='Item-CPF'>{item.cpf}</td>
                                            <td>{item.plano}</td>
                                            <td>{item.dia.substr(0, 10)}</td>
                                            <td>{item.horario.substr(0, 5)}</td>
                                            <td className='configuracoes'>
                                                <img className="image-1" src='/image/lapis-edit.png' width="20px" alt='editar' onClick={() => editarCliente(item.id)}/>
                                                <img className="image-2" src='/image/table-lixeira.png' width="20px" alt='excluir' onClick={() => excluirClienteClick(item.id, item.nome)}/>
                                            </td>
                                        </tr>     
                                )}

                                
                            </tbody>
                        
                        </table> 
                    </div>
            </div>
        </div>

    </section>

</main>
)

}