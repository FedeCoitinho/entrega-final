import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {

  return (
    <BrowserRouter>
      <NavBar/>

        <Routes>
            <Route path ="/" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/> }/>
            <Route path="/productos/:category" element={<ItemListContainer/> }/>
        </Routes>

    </BrowserRouter>
    
  );
}

export default App
