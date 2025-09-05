import SideBar from './components/SideBar'
import TotalPorBairro from './components/TotalBairro';
import Servicos from './components/Servicos';
import TotalServicos from './components/TotalServicos';
import Visor from './components/Visor';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <div className='bg-black' style={{ width: '100%', height: '1000px' }}>
        
        <div className='col'>

          <div className='row'>
            <div className='col'>
           
            </div>

            <div className='col-sm-12'>
              <span style={{fontSize:'1.2cm', color:'white',}}>Dashboard Serviços Públicos</span>
                05/09/2025
              <div className='col-sm-10 d-flex justify-content-end'>
                <Visor/>
               
              </div>
             
            </div>
          </div>
 <br></br>
            <div className='row'>
            <div className='col-sm-2'>
              <SideBar/>
            </div>
            <div className='col-sm-10'>
              <div className='row'>
                <div className='col-sm-5'>
                  <TotalPorBairro/>
                </div>
                <div className='col-sm-7'>
                  <Servicos/>
                </div>
              </div>
              <br></br>
              <div className='row'>
                <div className='col-sm-5'>
                  <TotalServicos/>
                </div>
                <div className='col-sm-7'>
                  <Servicos/>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
