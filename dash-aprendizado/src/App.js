import SideBar from './components/SideBar'
import TotalPorBairro from './components/ProgressBar';
import Servicos from './components/Servicos'

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



function App() {
  return (
    <div className="App">
      <div className='bg-black' style={{ width: '100%', height: '1000px' }}>
        <div className='row'>
          <div className='col-sm'>
            <SideBar/>
          </div>
          <div className='col-sm-4'>
            <TotalPorBairro/>
          </div>
          <div className='col-sm-6'>
            <Servicos/>
          </div>
        </div>
          
          
      </div>
      
    </div>
  );
}

export default App;
