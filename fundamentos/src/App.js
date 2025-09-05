

import ContainerTop from './components/ContainerTop';
import ContainerBot from './components/containerBot';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



function App() {
  return (
    <div className="App">
   <div className="col bg-secondary" >
    
        <ContainerTop/>
        <ContainerBot/>
                        
    </div>
    </div>
  );
}

export default App;
