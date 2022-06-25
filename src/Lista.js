import React from "react";
import Celular from "./Celular";
import './css/Lista.css';

class Lista extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="titulo">

                    </div>
                </div>
                {
                    this.props.items.map(phone =>
                        <Celular model={phone.modelo}
                            pre={phone.precioUSD}
                            foto={phone.imagen}
                        />)
                }
            </div>

        );
    }

}

export default Lista;