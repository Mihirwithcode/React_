import React from 'react';
import { Usercontext } from '../App';
import { useContext } from 'react';

function ChildC() {
  const user = useContext(Usercontext);
  return (
    <div>
      <h1>Data:{user.name}</h1>
    </div>
  );
}

export default ChildC;
