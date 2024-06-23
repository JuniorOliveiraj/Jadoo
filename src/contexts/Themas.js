import { useState, createContext, } from 'react';
 
// components

// mock
//import USERLIST from '../../_mock/user';





 
export const AlteracaoThema = createContext({});

export const AlterThema = ({ children }) => {
  const [ok, setOk] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [onFilterName, setOnFilterName] = useState("");
  const [noticiasFavoritas, setNoticiasFavoritas] = useState([]);
  const [darkModeThem, setDarkModeThem] = useState(false);



 
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
 
 



  // Define a lista final de notícias, com o status atualizado


  return (
    <AlteracaoThema.Provider
      value={{ darkModeThem, setDarkModeThem, isLoading, setIsLoading, ok, onFilterName, setOnFilterName, noticiasFavoritas, debounce }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




