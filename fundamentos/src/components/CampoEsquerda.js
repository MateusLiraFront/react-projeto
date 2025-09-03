const CampoEsquerda = () => {

    return (
        <div className="col-sm-6 ms-3 mt-4 text-black">

            <div className="col-sm-12 text-black">
                <label htmlFor="campoNome" className="form-label"> Nome Completo/Razão Social </label>
                <input
                    type="text"
                    className="form-control"
                    id="campoNome"
                    placeholder=""
                    name="nome"
                    required
                />
                <div className="invalid-feedback">
                    *campo nome é obrigatorio.
                </div>

            </div>

            <div className="input col mt-3">
                    <div className="invalid-feedback">
                            * O campo é obrigatório.
                    </div>
                       <div className="row">
                        <div className="col">
                            <div className="form-check " style={{ fontWeight: 400 }}>
                                <input className="form-check-input" type="radio" name="opcaoSexual" id="hcis" required/>
                                    <label className="form-check-label" htmlFor="opcao1">
                                        <p className="fontForm"> Homem Cis </p>
                                    </label>
                            </div>
                        </div>
                            <div className="col">
                                <div className="form-check " style={{ fontWeight: 400 }}>
                                    <input className="form-check-input" type="radio" name="opcaoSexual" id="mcis" required/>
                                        <label className="form-check-label" htmlFor="opcao1">
                                            <p className="fontForm"> Mulher Cis</p>
                                        </label>
                                </div>
                            </div>
                         <div className="col">
                            <div className="form-check" style={{ fontWeight: 400 }}>
                                <input className="form-check-input" type="radio" name="opcaoSexual" id="htrans"/>
                                    <label className="form-check-label" htmlFor="opcao1">
                                        <p className="fontForm"> Homem Trans </p>
                                    </label>
                            </div>
                        </div>
                            <div className="col">
                                <div className="form-check" style={{ fontWeight: 400 }}>
                                    <input className="form-check-input" type="radio" name="opcaoSexual" id="mtrans"/>
                                        <label className="form-check-label" htmlFor="opcao1">
                                            <p className="fontForm">Mulher Trans</p>
                                        </label>
                                </div>
                            </div>                        
                       </div>
                      
                   <div className="row ">
                       <div className="col">
                           <div className="form-check me-3">
                               <input className="form-check-input" type="radio" name="opcaoSexual" id="nbinario"/>
                                    <label className="form-check-label" htmlFor="opcao1" style={{ fontWeight: 400 }}>
                                       <p className="fontForm">Não Binário</p>
                                    </label>
                           </div>
                       </div>
                       <div className="col">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="opcaoSexual" id="ndeclarado"/>
                                    <label className="form-check-label" htmlFor="opcao1" style={{ fontWeight: 400 }}>
                                       <p className="fontForm">Não quis declarar</p>
                                    </label>
                            </div>
                       </div>
                       <div className="col">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="radio" name="opcaoSexual" id="outro"/>
                                    <label className="form-check-label" htmlFor="opcao1" style={{ fontWeight: 400 }}>
                                        <p className="fontForm">Outro</p>
                                    </label>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="col-sm-12 mt-3 text-black">
                <label htmlFor="campoEmail" className="form-label">E-mail</label>
                <input type="text" className="form-control form-control" id="campoEmail" placeholder="" name="email" required/>
                <div className="invalid-feedback">
                        * O campo Email é obrigatório.
                </div>
            </div>

            <div className="col-sm-12 mt-3 text-black">
                <label for="campoOrientacaoSexual" class="form-label">Orientação Sexual</label>
                <input type="text" className="form-control form-control" id="campoOrientacao" placeholder="" name="sexo"/>
                
            </div>

            <div className="col mt-3">
                <div className="row">
                <div className="col-sm-6  text-black">          
                    <label htmlFor="campoTelFixo" class="form-label">Telefone Fixo</label>
                    <input type="tel" class="form-control form-control" placeholder="(00) 0000-0000" name="telfixo"/>
                </div>  
                <div className="col-sm-6 text-black">                      
                    <label htmlFor="campoTelCel" className="form-label">Celular</label>
                    <input type="tel" className="form-control form-control" placeholder="(00) 90000-0000" id="telcel" name="telcel" required/>
                        <div className="invalid-feedback">
                            * O campo celular é obrigatório.
                        </div>
                </div>  
                </div>
            </div>

            <div className="col-sm-6 mt-3 text-black">
                <label htmlFor="campoCep" className="form-label">CEP</label>
                <input type="text" className="form-control form-control" name="cep" required/>
                    
            </div>

            <div className="col-sm-12 mt-3 text-black">
                <label htmlFor="campoEndereco" className="form-label">Endereço</label>
                <input type="text" className="form-control form-control" id="campoEndereco" name="endereco" required/>
                        <div className="invalid-feedback">
                            * O campo endereço é obrigatório.
                        </div>
            </div>

            <div className="col mt-3">
                <div className="row">
                <div className="col-sm-6 text-black">
                    <label htmlFor="campoBairro" className="form-label">Bairro</label>
                    <input type="text" className="form-control form-control" id="campoBairro" name="bairro" required/>
                        <div className="invalid-feedback">
                            * O campo bairro é obrigatório.
                        </div>
                </div>
                <div className="col-sm-6  text-black">
                    <label htmlFor="campoCidade" className="form-label">Cidade</label>
                    <input type="text" className="form-control form-control-lg" id="campoCidade" name="cidade" required/>
                        <div className="invalid-feedback">
                            * O campo cidade é obrigatório.
                        </div>
                </div>
                </div>
            </div>
                
            <div className="col mt-3">
                <div className="row">
                <div className="col-sm-6 text-black">
                    <label htmlFor="campoUF" className="form-label">UF</label>
                    <input type="text" className="form-control form-control" id="campoUF" placeholder="Ex: PE" name="uf" required/>
                        <div className="invalid-feedback">
                            * O campo uf é obrigatório.
                        </div>
                </div>
                <div className="col-sm-6  text-black">
                    <label htmlFor="campoNumero" className="form-label">Número</label>
                    <input type="text" className="form-control form-control" name="numero"/>
                </div>
                </div>
            </div>

            <div className="col-sm-12 mt-3 text-black">
                <label htmlFor="campoReferencia" className="form-label">Ponto de Referência</label>
                <input type="text" class="form-control form-control" name="referencia"/>
            </div>

            <div className="col mt-3">
                <div className="row">
                    <div className="col-sm-6 text-black">
                    <label htmlFor="campoRG" className="form-label">RG</label>
                    <input type="text" className="form-control" name="rg" required />
                    </div>

                    <div className="col-sm-6 text-black">
                    <label htmlFor="campoOrgEmissor" className="form-label">Orgão Emissor</label>
                    <input type="text" className="form-control form-control-lg" name="orgEmissor" required />
                    </div>
                </div>
            </div>

            <div className="col mt-3">
            <div className="row">
                <div className="col-sm-6 text-black">
                <label htmlFor="campoPis" className="form-label">PIS/PASEP</label>
                <input type="text" className="form-control" name="pis" />
                </div>

                <div className="col-sm-6 text-black">
                <label htmlFor="campoNit" className="form-label">NIT</label>
                <input type="text" className="form-control" name="nit" />
                </div>
            </div>
            </div>

            <div className="input col mt-3">
            <div className="row">
                <div className="col-sm-4">Pessoa com PCD</div>

                <div className="col-sm-2">
                <div className="form-check me-3" style={{ fontWeight: 400 }}>
                    <input
                    className="form-check-input"
                    type="radio"
                    name="opcaoPCD"
                    id="opcaoPCDY"
                    required
                    />
                    <label className="form-check-label" htmlFor="opcaoPCDY">
                    Sim
                    </label>
                </div>
                </div>

                <div className="col-sm-1">
                <div className="form-check me-3" style={{ fontWeight: 400 }}>
                    <input
                    className="form-check-input"
                    type="radio"
                    name="opcaoPCD"
                    id="opcaoPCDN"
                    />
                    <label className="form-check-label" htmlFor="opcaoPCDN">
                    Não
                    </label>
                </div>
                </div>
            </div>
            </div>

            <div className="col-sm-12 text-black mt-3">
                <label htmlFor="campoDeficiencia" className="form-label">
                    Caso tenha marcado SIM, qual tipo de deficiência?
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="deficiencia"
                />
            </div>


        </div>

        
    );

};
    export default CampoEsquerda;