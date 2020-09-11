import React from 'react';
import logo from './logo.png';
import './App.css';
import Tab from './components/Tab/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
function App() {
  return ( 
    <div className="App">
      <header className="App-header"> 

        <img src={logo} className="app-logo"></img>
        <strong>
          Controla el estado de salud de tu cuerpo
        </strong>
         
        <p className="banner">
        Siempre es bueno saber el estado de tu cuerpo, con <strong>Healthy Life</strong> podras tener:
        </p>

        <ul className="banner-items">
          <li>
            Un seguimiento de tu peso.
          </li> 
          <li> 
         Ejercicios necesarios para mantenerte saludable. 
          </li>
          <li> 
           El consumo de alimentos que tuviste.
          </li>
        </ul>

        <div className="tabs">
          <Tab name="Seguimiento del peso" />
          <Tab name="Actividad física" />
          <Tab name="Alimentos" />
        </div>

      </header>
    </div>
  );
}

export default App;
