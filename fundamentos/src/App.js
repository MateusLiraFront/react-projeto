// components
import FirstComponent from './components/firstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
// Styles
import './App.css';

import banner1 from "./assets/PC-Banner.png"

function App() {
  return (
    <div className="App">
      <h1>fundamentos</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <div>
        <img src="./assets/PC-Banner.png" alt="banner 1"></img>
      </div>
      <div>
        <img src={banner1} alt="" width={500} height={300} />
      </div>
    </div>
  );
}

export default App;
