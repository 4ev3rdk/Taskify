import React, { createContext, useState } from 'react';

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
    const [allboard, setAllBoard] = useState({
        boards: [],   // must exist
        active: 0
    });

    return (
        <BoardContext.Provider value={{ allboard, setAllBoard }}>
            {children}
        </BoardContext.Provider>
    );
};

