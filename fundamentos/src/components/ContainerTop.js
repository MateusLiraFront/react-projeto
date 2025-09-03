import CampoEsquerda from './CampoEsquerda';
import CampoDireita from './campoDireita';


const ContainerTop = () =>{
    
    return(

     <div className="col bg-secondary" >
     
       <form className="row needs-validation" noValidate>
        <div
            className="col d-flex justify-content-center fw-bold mt-3"
            id="tabela-formulario"
            style={{
            fontWeight: 700,
            fontFamily: "'Times New Roman', Times, serif"
            }}>
                <div className="col-sm-7 mt-3 bg-light">
                    <div className="container-fluid mt-3">

                        <div className="row">
                            <CampoEsquerda/>
                            <CampoDireita/>
                        </div>

                    </div>
                </div>
        </div>
    </form>

    </div>
    
   
    );
};
    export default ContainerTop;