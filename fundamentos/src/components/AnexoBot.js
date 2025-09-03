const AnexoBot =() => {

    return (
        <div className="col p-4">
            <span className="fw-bold">ANEXO 3</span>{" "}
            <span style={{ fontWeight: 400 }}>
                Material comprobatório ex. vídeo
            </span>{" "}
            <span className="text-danger">
                (Tamanho Máximo de 10 mb por imagem.)
            </span>

            <input
                className="form-control"
                type="file"
                id="formFile-AnexoThree"
            />
        </div>
    );

};

    export default AnexoBot;