import AnexoEsquerda from './AnexoEsquerda';
import AnexoDireita from './AnexoDireita';
import AnexoBot from './AnexoBot';


const ContainerBot = () =>{
    
    return(

        <div className="col bg-secondary text-start" >
     
       <form className="row needs-validation" noValidate>
        <div
            className="col d-flex justify-content-center fw-bold "
            id="tabela-formulario"
            style={{
            fontWeight: 700,
            fontFamily: "'Times New Roman', Times, serif"
            }}>
                <div className="col-sm-7  bg-light">
                     <div className="container-fluid">
                        <hr className="linha-tracejada my-4" style={{ borderTop: "2px solid #000" }} />
                        <div className="row">
                            <AnexoEsquerda/>
                            <AnexoDireita/>
                        </div>
                        <AnexoBot/>
                    </div>
                </div>
            </div>
            </form>
            </div>
    
   
    );
};
    export default ContainerBot;