import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JWT from 'jsonwebtoken';

const App = () => {

  const [isloggedin, setLoggedin] = useState(undefined);

  useEffect(() => {
    const token = JWT.decode(localStorage.getItem('token'));
    if (token) {
      setLoggedin(true)
      console.log('Successful token');
    } else {
      console.log('Failed to get token');

    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedin(false)
  }
  console.log(isloggedin);
  const token = JWT.decode(localStorage.getItem('token'))
  //console.log(token.email);


  return (
    <div>
          <div>
            <Link to='/Login'>Login</Link>
          </div>
          <div>
            <Link to='/Register'>Register</Link>
          </div>
          <div>
            <Link to='/Todos'>Todos</Link>
          </div>
          <div>
            <Link to='/' type='button' onClick={logout}>Logout</Link>
          </div>
          <div>
            <p >Welcome back!</p>
          </div>
    </div>
  );
}
export default App
