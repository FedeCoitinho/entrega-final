import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
function App() {

  return (
    <div>
    
    <NavBar/>
    <ItemListContainer Elemento="Aca van a ir los articulos"/>

    </div>   
    
    
  );
}

export default App
