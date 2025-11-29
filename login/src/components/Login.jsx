import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext.jsx';

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const { setuser } = useContext(UserContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
