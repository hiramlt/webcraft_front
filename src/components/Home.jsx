import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    
    return(
        <body>
            <header>
                <h1>WebCraft</h1>
            </header>
            <Sidebar page = "1"/>
            <main>
               <div className="page-title">
                    <h2>Páginas registradas</h2>
                    <button>Agregar</button>
               </div>
               <div className="content">
                hola
               </div>
            </main>
        </body>

    );
}

export default Home;