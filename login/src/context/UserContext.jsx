import { useState, createContext } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
