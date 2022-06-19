import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiTypography} from "./components/MUITypography";
import {MuiButton} from "./components/MUIButton";
import MuiTextField from "./components/MUITextField";
import MIUSelect from "./components/MIUSelect";

function App() {
    return (
        <div className="App">
            {/*<MuiTypography/>*/}
            {/*<MuiButton/>*/}
            {/*<MuiTextField/>*/}
            <MIUSelect/>
        </div>
    );
}

export default App;
