import { createContext, useEffect, useState } from "react";
// Import food and market lists from assets
import { prod_list} from '../assets/assets';

// Create a context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    // Define the context value to be provided
    const ContextValue = {
        prod_list
    };

    return (
        // Provide the context value to children components
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;