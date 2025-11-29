import React from 'react';
import { UserContextProvider } from './context/UserContext.jsx';
import './App.css';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <UserContextProvider>
      <h1>Mihir With Login HEY:</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
