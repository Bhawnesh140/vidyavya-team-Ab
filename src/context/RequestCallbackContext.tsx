
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RequestCallbackContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const RequestCallbackContext = createContext<RequestCallbackContextType | undefined>(undefined);

export const RequestCallbackProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <RequestCallbackContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </RequestCallbackContext.Provider>
    );
};

export const useRequestCallback = () => {
    const context = useContext(RequestCallbackContext);
    if (context === undefined) {
        throw new Error('useRequestCallback must be used within a RequestCallbackProvider');
    }
    return context;
};
