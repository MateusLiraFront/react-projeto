const CampoDireita = () => {

    return (
        <div className="col-sm-6 text-start mt-4 text-black">
            {/* CPF / CNPJ */}
            <div className="row">
                <div className="col-sm-6">
                <label htmlFor="campoCpf" className="form-label">CPF/CNPJ</label>
                <input type="text" className="form-control" id="campoCpf" name="cpf" required />
                <div className="invalid-feedback">* O campo cpf é obrigatório.</div>
                </div>

                <div className="col p-3">
                <div className="form-check p-1 me-3" style={{ fontWeight: 400 }}>
                    <input className="form-check-input" type="radio" id="pessoaf" name="pessoafj" required />
                    <label className="form-check-label" htmlFor="pessoaf">Pessoa Física</label>
                </div>
                <div className="form-check p-1 me-3" style={{ fontWeight: 400 }}>
                    <input className="form-check-input" type="radio" id="pessoaj" name="pessoafj" />
                    <label className="form-check-label" htmlFor="pessoaj">Pessoa Jurídica</label>
                </div>
                <div className="invalid-feedback">* O campo cpf/cnpj é obrigatório.</div>
                </div>
            </div>

            {/* Redes Sociais */}
            <div className="col p-3">
                <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="campoFacebook" className="form-label">Facebook</label>
                    <input type="text" className="form-control" name="facebook" />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="campoInstagram" className="form-label">Instagram</label>
                    <input type="text" className="form-control" name="instagram" />
                </div>
                </div>
            </div>

            <div className="col p-3">
                <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="campoTiktok" className="form-label">TikTok</label>
                    <input type="text" className="form-control" name="tiktok" />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="campoTwitter" className="form-label">Twitter</label>
                    <input type="text" className="form-control" name="twitter" />
                </div>
                </div>
            </div>

            <div className="col p-3">
                <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="campoYoutube" className="form-label">Youtube</label>
                    <input type="text" className="form-control" name="youtube" />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="campoBlog" className="form-label">Blog</label>
                    <input type="text" className="form-control" name="blog" />
                </div>
                </div>
            </div>

            {/* Profissão */}
            <div className="col-sm-12">
                <label htmlFor="campoProfissao" className="form-label">Profissão</label>
                <input type="text" className="form-control" name="profissao" required />
            </div>

            {/* Formação */}
            <div className="col-sm-12 p-3">
                <label htmlFor="selectFormacao" className="form-label">Formação</label>
                <select className="form-select form-select-lg w-100" id="selectFormacao" name="formacao" required>
                <option>--Selecione--</option>
                <option>Diretor</option>
                <option>Supervisor</option>
                <option>4</option>
                </select>
                <div className="invalid-feedback">* O campo formação é obrigatório.</div>
            </div>

            {/* Média Salarial */}
            <div className="col-sm-12 p-3">
                <label htmlFor="select1" className="form-label">Média Salarial</label>
                <select className="form-select form-select-lg w-100" id="select1" name="salario" required>
                <option>--Selecione--</option>
                <option>menor que 1 salário</option>
                <option>1 à 2 salários</option>
                <option>3 salários ou mais</option>
                </select>
            </div>

            {/* Eixo Cultural */}
            <div className="col-sm-12 p-3">
                <label htmlFor="selectCultura" className="form-label">Eixo Cultural</label>
                <select className="form-select form-select-lg w-100" id="selectCultura" name="eixoCultural" required>
                <option>--Selecione--</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
                <div className="invalid-feedback">* O campo eixo cultural é obrigatório.</div>
            </div>

            {/* Raça / Etnia */}
            <div className="col-sm-12 p-3">
                <label htmlFor="selectRaca" className="form-label">Opção de Raça/Etnia</label>
                <select className="form-select form-select-lg w-100" id="selectRaca" name="etnia" required>
                <option>--Selecione--</option>
                <option>branco</option>
                <option>preto</option>
                <option>pardo</option>
                <option>amarelo</option>
                <option>indígena</option>
                </select>
                <div className="invalid-feedback">* O campo etnia é inválido.</div>
            </div>

            {/* Histórico */}
            <div className="col-sm-12 p-3">
                <label htmlFor="historico">Histórico Simplificado:</label>
                <textarea className="form-control" rows="5" id="historico" name="comentario" required></textarea>
                <div className="invalid-feedback">* O campo histórico é obrigatório.</div>
            </div>

            {/* Aceite de Termos */}
            <div className="col-sm-12 p-3 mt-5">
                <p>
                <span>Aceito todas as </span>
                <span className="text-primary">Políticas de Privacidade.</span><br />
                <span className="text-danger">
                    Ao clicar em (Aceito) você participará automaticamente das etapas para a escolha do conselho cultural.
                </span>
                </p>

                <div className="row mt-5">
                <div className="col-sm-2">
                    <div className="form-check me-3" style={{ fontWeight: 400 }}>
                    <input className="form-check-input" type="radio" name="opcaoYN" id="aceito" required />
                    <label className="form-check-label" htmlFor="aceito">Aceito</label>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-check me-3" style={{ fontWeight: 400 }}>
                    <input className="form-check-input" type="radio" name="opcaoYN" id="naoAceito" />
                    <label className="form-check-label" htmlFor="naoAceito">Não Aceito</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );

};
    export default CampoDireita;