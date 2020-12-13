import React from 'react';
import App from '../../App';


const AppContext = React.createContext({});


const AppContextProvider = ({children}) => {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;