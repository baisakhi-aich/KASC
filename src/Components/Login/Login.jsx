import React from 'react'
import './Login.css';



const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
         <input type="email" id="email" required /> 
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me</label>
          <a href="#" style={{ marginLeft: '10px' }}>Forget password?</a>
        </div>
        <a href='https://kacs.learnyst.com/learn/account/signin'><input id="btn" type="button" value="Login" /></a>
      </form>
    </div>
  );
};



export default Login
