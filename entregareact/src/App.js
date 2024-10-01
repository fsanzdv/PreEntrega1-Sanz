import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

import 'materialize-css/dist/css/materialize.min.css';
import ProfileCard from "./components/ProfileCard/ProfileCard";
import AdidasImg from "./img/adidas.jpg";
import NikeImg from "./img/nike.jpg";
import MizunoImg from "./img/mizuno.jpg";
import EstiloCss from "./components/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Internacional from "./pages/Internacional";
import Clubs from "./pages/Clubs";
import Sale from "./pages/Sale";


function App() {
    return  ( 
    <BrowserRouter>
       <NavBar/>
         <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="internacional" element={<Internacional/>}/>
          <Route path="clubs" element={<Clubs/>}/>
          <Route path="sale" element={<Sale/>}/>
          </Route>
         </Routes>
         <ItemListContainer/>
    </BrowserRouter>
    )
}


export default App
