import React from "react";
import './css/Celular.css';

class Celular extends React.Component {
    render() {
        return (
            <div className="container-celular">
                <div className="subcontainer-celular">
                    <div className="image">
                        <img src={"img/" + this.props.foto} width="60%" />
                    </div>
                    <div className="bloque">
                        <div>
                            <div className="precio-label">
                                Modelo
                            </div>
                            <div className="info-celular">
                            {this.props.model}
                            </div>
                        </div>
                        <div>
                            <div className="precio-label">
                                PrecioUSD
                            </div>
                            <div className="info-celular">
                            {this.props.pre}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Celular;