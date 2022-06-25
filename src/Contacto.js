import React from "react";
import './css/Contacto.css';
import Datos from "./Datos";
import Envio from "./Envio";

class Contacto extends React.Component {
    render() {
        return (
            <div className="container-contacto">
              <Datos/>
              <Envio/>
            </div>
        );
    }
}
export default Contacto;