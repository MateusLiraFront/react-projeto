import CampoEsquerda from './CampoEsquerda';
import CampoDireita from './campoDireita';


const ContainerTop = () =>{
    
    return(

     <div className="col bg-secondary" style={{backgroundColor: "lightblue"}}>
      {/* <div className="row d-flex justify-content-center align-items-center text-center">
        
        <div className="col-auto mt-5">
          <img
            src={prefeituraLogo}
            className="img"
            alt="prefeitura logo"
            style={{ height: '100px' }}
          />
        </div>

        <div className="col-auto mt-5 justify-content-center text-white mb-0 fw-bold">
          <h3 className="mb-0 fw-bold">
            ADM<br />
            CADASTRO CULTURAL
          </h3>
        </div>

        <div className="col-auto mt-5">
          <img
            src={culturaLogo}
            className="img"
            alt="fundacao-cultura-logo"
            style={{ maxHeight: '100px' }}
          />
        </div>

      </div> */}
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