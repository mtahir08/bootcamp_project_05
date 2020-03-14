import React, { useState } from 'react'
// import './App.css'; 
import ThemeContext from './ThemeContext'
import { Provider } from 'react-redux';
import Routes from './Router';
import MyStore from './store';

function App() {
    const themeHook = useState("light");
    return (
        <ThemeContext.Provider value={themeHook}>
            <Provider store={MyStore}>
                <Routes />
            </Provider>
        </ThemeContext.Provider>
    );
}

export default App;
