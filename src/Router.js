// ./client/src/Router.js

// 1. IMPORTACIONES
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Layout from "./components/Layout";

import Guitars from "./components/Guitars";
import Single from './components/Guitars/Single'

import Stores from "./components/Stores";
import SingleStore from "./components/Stores/SingleStore"

import GuitarState from "./context/Guitar/GuitarState";
import CreateGuitar from './components/Guitars/Create'

import StoreState from "./context/Store/storeState";
import CreateStore from "./components/Stores/CreateStores"

// 2. FUNCIÓN
const Router = () => {
  return (
    <>
      <GuitarState>
        <StoreState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* localhost:3000/ */}
                <Route index element={<Home />} />
                {/* localhost:3000/registro */}
                <Route path="registro" element={<Register />} />
                {/* localhost:3000/iniciar-sesion */}
                <Route path="iniciar-sesion" element={<Login />} />
                {/* localhost:3000/guitarras */}
                <Route path="guitarras" element={<Guitars />} />
								{/* localhost:3000/guitarras/:id */}
							  <Route path="guitarras/:id" element={<Single />} />
                {/* localhost:3000/guitarras/crear */}
							  <Route path="guitarras/crear" element={<CreateGuitar />} />


				        {/* localhost:3000/stores */}
                <Route path="stores" element={<Stores />} />
                {/* localhost:3000/guitarras/:id */}
							  <Route path="stores/:id" element={<SingleStore />} />
                {/* localhost:3000/guitarras/crear */}
							  <Route path="stores/crear" element={<CreateStore />} />

              </Route>
            </Routes>
          </BrowserRouter>
        </StoreState>
      </GuitarState>
    </>
  );
};

// 3. EXPORTACIÓN
export default Router;
