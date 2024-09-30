 import { useState } from "react";



function ProfileCard({titulo,parrafo,img}){

    const [count, setCount] = useState(0);


function handleClick(){
  setCount( count + 1);
}




    return(
         <div className=" contenedor cartas">
           <div className=" carta">
            <img src={img} alt="botines"/>
           <h3>{titulo}</h3>
           <p>{parrafo}</p> 
           <button onClick={handleClick}>
            <p>Agregar al carrito</p>
            
            </button>
            <div>
              <span><p>Total carrito: {count}</p></span>
            </div>
           </div>
          
         </div>
    )
}


export default ProfileCard;