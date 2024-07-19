import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{

    return (
        <React.Fragment>
        
            <ThemeToggleButton />
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}