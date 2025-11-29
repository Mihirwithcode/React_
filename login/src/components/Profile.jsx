import React, { useContext } from 'react';
import UserContext from '../context/UserContext.jsx';

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return (
    <div>
      🔥 Welcome! <br />
      <strong>Username:</strong> {user.username} <br />
      <strong>Password:</strong> {user.password}
    </div>
  );
}

export default Profile;
