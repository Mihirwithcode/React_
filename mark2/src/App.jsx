import React from 'react';
import { createContext, useState } from 'react';
import ChildA from './commponents/ChildA';

const Usercontext = createContext();

function App() {
  const [user, setuser] = useState({ name: 'mihir' });
  return (
    <Usercontext.Provider value={user}>
      <div>
        <ChildA />
      </div>
    </Usercontext.Provider>
  );
}

export default App;
export { Usercontext };
