import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUserSession } from '../Utils/Common';

const LoginPage = (props) => {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // handle button click of login form
  const HandleLogin = () => {
    setError(null);
    setLoading(true);

    fetch('http://localhost:4000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        username: username.value,
        password: password.value
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data',data);
      console.log('data',data.token);
      let token = data.token;
      setUserSession(data.token, data.user);
      
      history.push('/dashboard')
    })
    .catch((error) => {console.log(error);})
    // props.history.push('/dashboard');
  }


  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="text" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={HandleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default LoginPage;