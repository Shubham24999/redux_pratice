import './App.css';

import { Products } from './Pages/Products';
import {Route, Routes} from "react-router-dom";
import { Cart } from './Pages/Cart';
import { Navbar } from './Components/Navbar';


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/cart' element={<Cart />}/>
    </Routes></>

  );
}

export default App;
