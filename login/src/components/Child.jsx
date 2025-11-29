import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Child() {
  const { id } = useParams(); // get the dynamic parameter from URL

  return (
    <div>
      <h1>User Details Page</h1>
      <p>User ID: {id}</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default Child;
