const AnexoEsquerda =() => {

    return (
        <div className="col-sm-6 text-black">
  <ul className="list-group">
    <li className="list-group-item">
      <p>
        <span>
          ANEXO 1{" "}
          <span style={{ fontWeight: 400 }}>
            Documentação rg, cpf, comprovante de residência, currículo,
          </span>{" "}
          Caso tenha marcado sim em PCD, Inserir comprovação opcional{" "}
        </span>
        <span className="text-danger">
          (Tamanho Máximo de 6 mb por imagem.)
        </span>
        <br />
      </p>
    </li>

    <li className="list-group-item">
      <div className="accordion" id="accordionLeft">
        {[
          "1.1",
          "1.2",
          "1.3",
          "1.4",
          "1.5"
        ].map((item, index) => (
          <div className="card" key={item}>
            <div className="card-header" id={`heading${index + 1}`}>
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${index + 1}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index + 1}`}
                >
                  ANEXO 1.{item}
                </button>
              </h5>
            </div>

            <div
              id={`collapse${index + 1}`}
              className={`collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${index + 1}`}
              data-parent="#accordionLeft"
            >
              <div className="card-body col-sm-12 p-3">
                <input
                  className="form-control"
                  type="file"
                  id={`formFile-AnexoOne${item.replace(".", "")}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </li>
  </ul>
</div>

    );

};

    export default AnexoEsquerda;