import React from "react";
import './css/Datos.css'

class Datos extends React.Component{
    render(){
        return(
            <div className="container-datos">
                  <div className="titulo-Datos">
                    Formulario de Contacto
                </div>
                <div className="datos-contacto">
                    <div className="label-datos">
                    Nombres
                    </div>
                    <input className="input-datos" type="textField"/>
                    <div>
                    </div>
                </div>
                <div className="datos-contacto">
                    <div className="label-datos">
                    Nacionalidad
                    </div>
                    <input className="input-datos" ttype="textField" value="Peruana" />
                </div>
                <div className="datos-contacto">
                    <div className="label-datos">
                        Celular
                    </div> 
                    <input className="input-datos" type="textField"/>
                </div>
            </div>
        );
    }
}
export default Datos;