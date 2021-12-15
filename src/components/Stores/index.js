// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from "react";
import StoreContext from "../../context/Store/StoreContext";

import { Link } from "react-router-dom";

export default function Stores() {
  // ESTADO GLOBAL
  const ctx = useContext(StoreContext);

  const { 
    stores, 
    hola, 
    changeText, 
    getStores } = ctx;

  // ESTADO LOCAL

  return (
    <>
      <p>Listado de tiendas</p>
      {/* <p>{ hola }</p>

			<button onClick={ () => { changeText() } }>
				Cambiar texto
			</button> */}

      <button
        onClick={() => { getStores() }}>
        Listar Tiendas
      </button>

      <div>
        <h2>Listado de tiendas</h2>

        <ul>
          {stores.map((element) => {
            return (
              <li key={element._id}>
                <Link to={`/stores/${element._id}`}>
                  <p>{element.domicilio}</p>
                </Link>
                <p>{element.telefono}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
