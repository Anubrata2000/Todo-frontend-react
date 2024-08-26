import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-laravel-app-url/api/login', {
        email,
        password,
      });

      // Store token (assuming you get a token from your Laravel backend)
      localStorage.setItem('token', response.data.token);
      navigate('/todos');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div classname="container mt-5">
      <h1 classname="mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <div classname="mb-3">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div classname="mb-3">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p classname="text-danger">{error}</p>}
        <button type="submit" classname="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
