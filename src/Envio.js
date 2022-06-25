import React from "react";
import './css/Envio.css'

class Envio extends React.Component {
    render() {
        return (
            <div className="container-envio">
                <div className="datos-envio">
                    <div className="label-envio">
                        Tienda
                    </div>
                    <select className="input-envio" name="select">
                        <option value="value1">Seleccione</option>
                        <option value="value2">Tienda A</option>
                        <option value="value3" selected>Tienda B</option>
                        <option value="value4">Tienda C</option>
                        <option value="value5">Tienda D</option>
                    </select>
                    <div>

                    </div>
                </div>
                <div className="datos-envio">
                    <div className="label-envio">
                        Código Promocional
                    </div>
                    {this.props.codigoPromocional}
                    <input  className="input-envio" type="textField" value="TQ5678" />
                </div>
                <button className="btn-enviar" type="submit">ENVIAR</button>
            </div>
        );
    }
}
export default Envio;