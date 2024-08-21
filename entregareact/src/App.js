import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

import 'materialize-css/dist/css/materialize.min.css';


function App() {
    return  ( 
    <>
    <NavBar/>
    <ItemListContainer mensaje = "Hola esta es la futura pagina de RugbyShop"/>
    </>
    )
}


export default App
