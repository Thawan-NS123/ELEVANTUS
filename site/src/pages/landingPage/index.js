import './index.scss';


import { Link } from 'react-router-dom';



export default function Index(){

    return(
        <main className='pagina-landingPage'>
                 {/* Cabeçalho do Elevantus(Imagem de No Pain No Gain /
                                        Logo com o fundo preto /
                                        Link para o Login) */} 
        <header className="Cabecalho-Elevantus">

            <div className="Cabecalho-Elevantus-Logo_e_Link">
                <img className="Cabecalho-Elevantus-Logo" src="/image/img-elevatus-png.jpg" alt="Elevantus"/>
                <Link styled='font-family:Font-1;' className="Cabecalho-Elevantus-Link" to='/login' >Login</Link> 
            </div>

            <div className="Cabecalho-Elevantus-Imagem_de_fundo_no_pain_no_gain">
                <img className="Cabecalho-Elevantus-Imagem_de_fundo"
                 src="/image/no pain no gain.webp" alt="No pain no gain"/>
            </div>

        </header>

             {/* Faixa 2 do Elevantus(Titulo dos Planos /
                                  Plano Básico /
                                  Plano Essencial /
                                  Plano Premiun) */}  
                                       
        <section styled=" background-color:#f4f4f4;" className="Faixa-2-Elevantus">

                <div className="Faixa-2-Elevantus-Titulo_e_Alter">
                    <h2 className="Faixa-2-Elevantus-Titulo">Planos</h2>
                    <img className="Faixa-2-Elevantus-Alter" src="/image/img-peso.jpg" alt="Alter"/>
                </div>

                {/* Plano */}

                <div  className="Faixa-2-Elevantus-Planos">


                {/*  Plano Básico */}

                <div className="Faixa-2-Elevantus-Plano_Basico">
                    
                        <div className="Faixa-2-Elevantus-Planos_Tipo_e_Valor_Basico">
                            <h3 styled="color:#333333;" 
                                className="Faixa-2-Elevantus-Planos_Tipo"> &nbsp; BÁSICO</h3>
                            <h3 styled="color:#333333;"
                                className="Faixa-2-Elevantus-Planos_Valor"> &nbsp;R$89,99</h3>
                        </div>

                        <div className="Faixa-2-Elevantus-Planos_Descricoes">

                            <div>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Beneficio">BENEFÍCIOS</h3>
                            </div>

                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg"  alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Área de musculação<br/>  e aeróbicos</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg"  alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Desconto na matrícula</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/negativo-img.jpg"  alt='não contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Avaliação fisica <br/> (Gratuita)</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/negativo-img.jpg"  alt='não contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Desconto no pagamento <br/> na primeira aula</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/negativo-img.jpg"  alt='não contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Aula em Domicílio</h3>
                            </div>

                        </div>

                        <div styled="background-color:#A7A7A7 ;"
                            className="Faixa-2-Elevantus-Planos_Rodape_B">
                            <h3 styled="color:#A7A7A7 ; font-family:'Font-8';" >Elevantus-Fitness</h3>
                        </div>
                        
                </div>
                
                {/* Plano Essencial */}

                <div className="Faixa-2-Elevantus-Plano_Essencial">

                        <div className="Faixa-2-Elevantus-Planos_Tipo_e_Valor_Essencial">
                        
                            <h3 styled="color:white;"
                                className="Faixa-2-Elevantus-Planos_Tipo_E">ESSENCIAL</h3>
                            <h3 styled="color:white;"
                                className="Faixa-2-Elevantus-Planos_Valor_E"> R$110,99</h3>

                        </div>

                        <div className="Faixa-2-Elevantus-Planos_Descricoes">

                            <div>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Beneficio">BENEFÍCIOS</h3>
                            </div>

                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Área de musculação<br/>  e aeróbicos</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/negativo-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Desconto na matrícula</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='não contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Avaliação fisica <br/> (Gratuita)</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Desconto no pagamento <br/> na primeira aula</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/negativo-img.jpg" alt='não contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Aula em Domicílio</h3>
                            </div>

                        </div>

                        <div styled="background-color:#AA8B2d ;"
                            className="Faixa-2-Elevantus-Planos_Rodape_E">
                            <h3 styled="color:#AA8B2D; font-family:'Font-8';">Elevantus-Fitness</h3>
                        </div>
                        
                </div>

                {/* Plano Premiun */}

                <div className="Faixa-2-Elevantus-Plano_Premiun">
                    
                        <div className="Faixa-2-Elevantus-Planos_Tipo_e_Valor_Premiun">

                            <h3 styled="color:rgb(255, 255, 255);"
                                className="Faixa-2-Elevantus-Planos_Tipo_P">PREMIUN</h3>
                            <h3 styled="color:rgb(255, 255, 255);"
                                className="Faixa-2-Elevantus-Planos_Valor_P">&nbsp;R$125,99</h3>

                        </div>

                        <div className="Faixa-2-Elevantus-Planos_Descricoes">

                            <div>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Beneficio">BENEFÍCIOS</h3>
                            </div>

                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Área de musculação<br/>  e aeróbicos</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Desconto na matrícula</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Avaliação fisica <br/> (Gratuita)</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Desconto no pagamento <br/> na primeira aula</h3>
                            </div>
                            <div className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado_e_Informacoes">
                                <img className="Faixa-2-Elevantus-Planos_Descricoes_Certo_e_Errado"
                                    src="/image/confere-img.jpg" alt='contém'/>
                                <h3 className="Faixa-2-Elevantus-Planos_Descricoes_Informacoes">Aula em Domicílio</h3>
                            </div>

                        </div>

                        <div styled="background-color:#000 ;"
                            className="Faixa-2-Elevantus-Planos_Rodape_P">
                            <h3 styled="color:#000 ; font-family:'Font-8';" >Elevantus-Fitness</h3>
                        </div>
                        
                </div>

                </div>

        </section>                     
                                       
             {/* Faixa 3 do Elevantus(Imagem de Fundo de Alteres /
                                  Fundo Preto /
                                  Imagem do Cleiton) */}

        <section className="Faixa-3-Elevantus">

            

            <div className="Faixa-3-Elevantus-Imagens_Aparelhos_e_Esteiras">

                <img className="Faixa-3-Elevantus-Imagem_Aparelhos"
                        src="/image/Aparelhos-Faixa3.jfif" alt='aparelhos'/>
                <img className="Faixa-3-Elevantus-Imagem_Esteiras"
                        src="/image/Esteira-Faixa3.jfif" alt='aparelhos'/>

            </div>

            <div>

                <img className="Faixa-3-Elevantus-Imagem_Centralizada"
                            src="/image/Imagem-centro-faixa-3.webp" alt='aparelhos'/>

            </div>

            <div className="Faixa-3-Elevantus-Imagens_Aparelhos_e_Cadeira">

                <img className="Faixa-3-Elevantus-Imagem_Aparelho"
                        src="/image/Aparelhos-Faixa3.jpeg" alt='aparelhos'/>
                <img className="Faixa-3-Elevantus-Imagem_Cadeira"
                        src="/image/Treino de Perna Faixa3.jpg" alt='aparelhos'/>

            </div>

        </section>

             {/* Faixa 4 do Elevantus(Titulo dos comentarios /
                                  Imagem das pessoa que comentaram /
                                  Nome das pessoa que comentaram /
                                  Comentário das pessoas) */}

        <section styled=" background-color:#d4d4d4;" className="Faixa-4-Elevantus">

            <div className="Faixa-4-Elevantus-Titulo_e_Balao">
                <h3 className="Faixa-4-Elevantus-Titulo">O que pensam sobre nós</h3>
                <img className="Faixa-4-Elevantus-Balao" src="/image/balaozinho.jpg" alt='comentários'/>
            </div>

            <div className="Faixa-4-Elevantus-Todas_Fotos_Nomes_e_Comentarios">

                <div className="Faixa-4-Elevantus-Fotos_Nomes_e_Comentarios">

                    <div className="Faixa-4-Elevantus-Foto_e_Nome">
                        <img className="Faixa-4-Elevantus-Foto"
                         src="/image/Jaqueline@123.jpeg" alt='imagem_J'/>
                        <h3 className="Faixa-4-Elevantus-Nome">Jaqueline@123</h3>
                    </div>

                    <h3 className="Faixa-4-Elevantus-Comentario">“ Responsabilidade e comprometimento com seus colaboradores e clientes, ambiente de trabalho saudável. “</h3>
               
                </div>

                <div  className="Faixa-4-Elevantus-Fotos_Nomes_e_Comentarios">

                    <div  className="Faixa-4-Elevantus-Foto_e_Nome">
                        <img  className="Faixa-4-Elevantus-Foto"
                         src="/image/Ricardo@top.jpeg" alt='imagem_R'/>
                        <h3 className="Faixa-4-Elevantus-Nome">Ricardo@top</h3>
                    </div>
                    
                    <h3 className="Faixa-4-Elevantus-Comentario">“ As aulas ajudaram muito nos primeiros meses, o personal é extremamente qualificado e carismatico, estou amando meus treinos. “</h3>
                
                </div>

                <div  className="Faixa-4-Elevantus-Fotos_Nomes_e_Comentarios">

                    <div className="Faixa-4-Elevantus-Foto_e_Nome">
                        <img  className="Faixa-4-Elevantus-Foto"
                         src="/image/Fernanda@smith.jpeg" alt='imagem_F'/>
                        <h3 className="Faixa-4-Elevantus-Nome">Fernanda@smith</h3>
                    </div>

                    <h3 className="Faixa-4-Elevantus-Comentario">“Personal super atencioso, me ensinou como fazer os exercicios direitinho e estou tendo um resultado muito bom com os treinamentos.”</h3>
                
                </div>

                
            </div>
        </section>

              {/* Rodapé do Elevantus(Contato Telefonico/
                                  Email /
                                  Redes Sociais) */}


        <footer className="Rodape-Elevantus">

            <div className="Rodape-Elevantus_Telefone_e_Email">
                <h3 className="Rodape-Elevantus_Telefone">Contato telefônico: </h3>
                <h3 className="Rodape-Elevantus_Telefone_Telefone">(11)94002 -8922</h3>
                <h3 className="Rodape-Elevantus_Email">Email:</h3>
                <h3 className="Rodape-Elevantus_Email_Email">ElevantusContact@gmail.com</h3>
            </div>

            <div className="Rodape-Elevantus_Redes_Sociais_Twitter_Instagram_Facebook">
                <div>
                    <h3 className="Rodape-Elevantus_Redes_Sociais"> &nbsp; Nossas Redes Sociais:</h3>
                </div>
                <div className="Rodape-Elevantus_Twitter_Instagram_Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="orange">
                        <path d="M15.8752 37.4268C28.3228 37.4268 35.134 26.1381 35.134 16.3652C35.134 16.0476 35.134 15.73 35.1208 15.4124C36.4408 14.373 37.5892 13.0594 38.5 11.5725C37.2856 12.1644 35.9788 12.5541 34.606 12.7418C36.0052 11.8324 37.0744 10.3743 37.5892 8.64206C36.2824 9.49377 34.8304 10.1001 33.286 10.4321C32.0584 8.98852 30.2896 8.09351 28.3492 8.09351C24.6136 8.09351 21.5776 11.4137 21.5776 15.499C21.5776 16.0764 21.6436 16.6394 21.7492 17.188C16.126 16.8704 11.1364 13.9255 7.7968 9.45046C7.216 10.5476 6.886 11.8179 6.886 13.1749C6.886 15.7444 8.0872 18.0108 9.8956 19.3389C8.7868 19.2956 7.744 18.9636 6.82 18.415C6.82 18.4439 6.82 18.4728 6.82 18.5161C6.82 22.0961 9.1564 25.0988 12.2452 25.7772C11.6776 25.9505 11.0836 26.0371 10.4632 26.0371C10.0276 26.0371 9.6052 25.9938 9.196 25.9072C10.054 28.852 12.562 30.9885 15.5188 31.0463C13.1956 33.0384 10.2784 34.2221 7.1104 34.2221C6.5692 34.2221 6.028 34.1932 5.5 34.1211C8.4964 36.1998 12.0604 37.4268 15.8752 37.4268Z" fill="#2F2F33"/>
                        </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9935 9.23346C26.4 9.23346 26.9173 9.25311 28.6589 9.3317C30.2696 9.40373 31.1405 9.67224 31.7232 9.90145C32.4958 10.2027 33.0458 10.5563 33.622 11.1326C34.1982 11.709 34.5583 12.2591 34.853 13.0318C35.0756 13.6147 35.3506 14.4857 35.4226 16.0967C35.5012 17.8387 35.5208 18.3561 35.5208 22.7635C35.5208 27.171 35.5012 27.6883 35.4226 29.4303C35.3506 31.0414 35.0821 31.9124 34.853 32.4952C34.5518 33.268 34.1982 33.8181 33.622 34.3944C33.0458 34.9707 32.4958 35.3309 31.7232 35.6256C31.1405 35.8483 30.2696 36.1233 28.6589 36.1954C26.9173 36.2739 26.4 36.2936 21.9935 36.2936C17.5869 36.2936 17.0696 36.2739 15.328 36.1954C13.7173 36.1233 12.8464 35.8548 12.2637 35.6256C11.4911 35.3244 10.9411 34.9707 10.3649 34.3944C9.78869 33.8181 9.42857 33.268 9.13393 32.4952C8.91131 31.9124 8.63631 31.0414 8.56429 29.4303C8.48571 27.6883 8.46607 27.171 8.46607 22.7635C8.46607 18.3561 8.48571 17.8387 8.56429 16.0967C8.63631 14.4857 8.90476 13.6147 9.13393 13.0318C9.43512 12.2591 9.78869 11.709 10.3649 11.1326C10.9411 10.5563 11.4911 10.1962 12.2637 9.90145C12.8464 9.67879 13.7173 9.40373 15.328 9.3317C17.0696 9.24656 17.5869 9.23346 21.9935 9.23346ZM21.9935 6.26025C17.5149 6.26025 16.9518 6.2799 15.1905 6.35849C13.4357 6.43707 12.2375 6.71868 11.1899 7.12471C10.103 7.54384 9.18631 8.1136 8.26964 9.03045C7.35298 9.9473 6.78988 10.8707 6.36429 11.9513C5.95833 12.9991 5.67679 14.1975 5.59821 15.9592C5.51964 17.7143 5.5 18.2775 5.5 22.757C5.5 27.2364 5.51964 27.7996 5.59821 29.5613C5.67679 31.3164 5.95833 32.5149 6.36429 33.5692C6.78333 34.6564 7.35298 35.5732 8.26964 36.4901C9.18631 37.4069 10.1095 37.9701 11.1899 38.3958C12.2375 38.8018 13.4357 39.0834 15.197 39.162C16.9583 39.2406 17.5149 39.2603 22 39.2603C26.4851 39.2603 27.0417 39.2406 28.803 39.162C30.5577 39.0834 31.756 38.8018 32.8101 38.3958C33.897 37.9767 34.8137 37.4069 35.7304 36.4901C36.647 35.5732 37.2101 34.6498 37.6357 33.5692C38.0417 32.5214 38.3232 31.323 38.4018 29.5613C38.4804 27.7996 38.5 27.243 38.5 22.757C38.5 18.271 38.4804 17.7143 38.4018 15.9527C38.3232 14.1975 38.0417 12.9991 37.6357 11.9447C37.2167 10.8576 36.647 9.94075 35.7304 9.0239C34.8137 8.10705 33.8905 7.54384 32.8101 7.11816C31.7625 6.71213 30.5643 6.43053 28.803 6.35194C27.0351 6.2799 26.472 6.26025 21.9935 6.26025ZM21.9935 14.2829C17.3185 14.2829 13.5208 18.0747 13.5208 22.7572C13.5208 27.4397 17.3185 31.2315 21.9935 31.2315C26.6685 31.2315 30.4661 27.4331 30.4661 22.7572C30.4661 18.0812 26.6685 14.2829 21.9935 14.2829ZM21.9935 28.2583C18.9554 28.2583 16.4935 25.7959 16.4935 22.7572C16.4935 19.7185 18.9554 17.2561 21.9935 17.2561C25.0315 17.2561 27.4935 19.7185 27.4935 22.7572C27.4935 25.7959 25.0315 28.2583 21.9935 28.2583ZM32.7774 13.9486C32.7774 15.0409 31.8921 15.9264 30.8 15.9264C29.7079 15.9264 28.8226 15.0409 28.8226 13.9486C28.8226 12.8563 29.7079 11.9708 30.8 11.9708C31.8921 11.9708 32.7774 12.8563 32.7774 13.9486Z" fill="#2F2F33"/>
                        </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
                        <path d="M38.5 22.8608C38.5 13.6916 31.1137 6.26025 22 6.26025C12.8863 6.26025 5.5 13.6916 5.5 22.8608C5.5 31.1481 11.5328 38.0152 19.4219 39.2603V27.6594H15.2324V22.8608H19.4219V19.2035C19.4219 15.0436 21.884 12.7448 25.6545 12.7448C27.4592 12.7448 29.3477 13.0691 29.3477 13.0691V17.1543H27.2658C25.2162 17.1543 24.5781 18.435 24.5781 19.7482V22.8608H29.1543L28.4228 27.6594H24.5781V39.2603C32.4672 38.0152 38.5 31.1481 38.5 22.8608Z" fill="#2F2F33"/>
                        </svg>
                </div>
            </div>

        </footer>

            
        </main>
    )

}