import React, { createContext, useState, useContext } from 'react';

const PhoneViewContext = createContext();

export const usePhoneView = () => useContext(PhoneViewContext);

export const PhoneViewProvider = ({ children }) => {
  const [isPhoneView, setIsPhoneView] = useState(false);

  const togglePhoneView = () => {
    setIsPhoneView(!isPhoneView);
  };

  return (
    <PhoneViewContext.Provider value={{ isPhoneView, togglePhoneView }}>
      {children}
    </PhoneViewContext.Provider>
  );
};