import React, {useState, useEffect} from 'react';

import './App.css';
import MpgComponent from "./components/Pages/MpgComponent";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import keycloak from "./keycloack";


function App() {

  return (
    <div>
        <ReactKeycloakProvider authClient={keycloak}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MpgComponent/>} />
                </Routes>
            </BrowserRouter>
        </ReactKeycloakProvider>

    </div>
  );
}

export default App;
