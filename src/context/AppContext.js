import React, { useState } from 'react';

export const AppContext = React.createContext({});


const AppContextProvider = ({children}) => {

    const [notificationId, setNotificationId] = useState(null);
    
    const defaultContext = {
        notificationId,
        setNotificationId,
    };
    return (
        <AppContext.Provider value={defaultContext}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContextProvider;