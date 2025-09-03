const AnexoDireita =() => {

    return (
   
        <div className="col-sm-6 text-black">
            <ul className="list-group">
                <li className="list-group-item">
                <p>
                    <span className="fw-bold">ANEXO 2</span>{" "}
                    <span style={{ fontWeight: 400 }}>
                    Material comprobatório ex. imagens, Currículo artístico, Certificados
                    e Declarações
                    </span>{" "}
                    <span className="text-danger">
                    (Tamanho Máximo de 6 mb por imagem.)
                    </span>
                </p>
                </li>

                <li className="list-group-item">
                <div className="accordion" id="accordionRight">
                    {["2.1", "2.2", "2.3", "2.4", "2.5"].map((item, index) => {
                    const headingId = `headingTwo${item.replace(".", "")}`;
                    const collapseId = `collapseTwo${item.replace(".", "")}`;
                    const fileInputId = `formFile-AnexoTwo${item.replace(".", "")}`;

                    return (
                        <div className="card" key={item}>
                        <div className="card-header" id={headingId}>
                            <h5 className="mb-0">
                            <button
                                className={`btn btn-link ${
                                index !== 0 ? "collapsed" : ""
                                }`}
                                type="button"
                                data-toggle="collapse"
                                data-target={`#${collapseId}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={collapseId}
                                id={index === 0 ? "anexo2" : undefined}
                            >
                                ANEXO {item}
                            </button>
                            </h5>
                        </div>

                        <div
                            id={collapseId}
                            className={`collapse ${index === 0 ? "show" : ""}`}
                            aria-labelledby={headingId}
                            data-parent="#accordionRight"
                        >
                            <div className="card-body col-sm-12 p-3">
                            <input
                                className="form-control"
                                type="file"
                                id={fileInputId}
                            />
                            </div>
                        </div>
                        </div>
                    );
                    })}
                </div>
                </li>
            </ul>
        </div>

    );

};

    export default AnexoDireita;