import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage(){
    return(
        <div className='container text-center mt-5'>
            <h1 className='mb-4'>Welcome to the Todo App</h1>
            <Link to="/login" className='btn btn-primary mx-2'>Login</Link>
            <Link to="/register" className="btn btn-success mx-2">Register</Link>
        </div>
    )
}

export default WelcomePage;