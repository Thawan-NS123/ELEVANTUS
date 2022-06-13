import { listarTodosFilmes, buscarPorCpf, deletarCliente } from '../../api/clienteApi';

import { useEffect, useState } from 'react'

import { confirmAlert } from 'react-confirm-alert'

import './index.scss';

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'


export default function Index(){

    const [cliente, setCliente] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();


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


    async function filtrar(){
        const resp = await buscarPorCpf(filtro);
        setFiltro(resp);
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

    <section className='fundo-basico'> {/* Está class esta no common */}
        
        {/* A partir daqui são class's no index.css  */} 
        <div className='divprincipal'>

            <div className='consultaefoto'>
                <div className='config-consultaefoto'> 
                    <h2 style={{fontFamily: 'Font-1'}} className='titulo-da-consulta'>CONSULTA</h2> 
                    <img src='/image/1652835584315 (1).png' className='logo-user' alt='Elevantus'/>
                </div>
            </div>

            <div className='conteudo-consulta'>

                <div className='caixa-input'>
                    <input type='text' placeholder='Buscar por CPF' className='input-Medio-BuscarNome'
                    value={filtro} onChange={e => setFiltro(e.target.value) }/>
                    <button onClick={filtrar}>Buscar</button>
                </div>

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
                                    <td>{item.nome}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.plano}</td>
                                    <td>{item.dia}</td>
                                    <td>{item.horario}</td>
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

    </section>

</main>
)

}