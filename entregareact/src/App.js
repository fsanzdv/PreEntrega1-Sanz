import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

import 'materialize-css/dist/css/materialize.min.css';
import ProfileCard from "./components/ProfileCard/ProfileCard";
import AdidasImg from "./img/adidas.jpg";
import NikeImg from "./img/nike.jpg";
import MizunoImg from "./img/mizuno.jpg";
import EstiloCss from "./components/App.css";


function App() {
    return  ( 
    <>
    <NavBar/>
    <ProfileCard titulo="Botas adidas" parrafo="adidas Kakari RS Soft Ground Boots" img={AdidasImg}/>
    <ProfileCard titulo="Botas nike" parrafo ="Nike Tiempo Legend 10 Elite Firm Ground Football Boots" img={NikeImg}/>
    <ProfileCard titulo = "Botas mizuno" parrafo ="Mizuno Morelia IV Made In Japan FG Boots Mens" img={MizunoImg}/>
    <ItemListContainer mensaje = "Hola esta es la futura pagina de RugbyShop"/>
    </>
    )
}


export default App
