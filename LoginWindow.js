import React from "react"
import { Link } from 'react-router-dom'
import './LoginWindow.css'
import swal from 'sweetalert';

export default function LoginWindow() {


  const [formData, setFormData] = React.useState( {username: "", password: "", remember: true} )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked: value
      }
    })
  }

  async function handleSubmit(event) {
    event.preventDefault() 
    try {
      let res = await fetch("http://localhost/api/auth/login/", {
        method: "POST", 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
      
      let resJson = await res.json();

      if (res.status !== 200) 
        swal({
          title: resJson.message,
          icon: "warning",
          dangerMode: true,
          timer: 2500,
        }) 

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <> 
     <div className="div-wrapper">   
             
       <h1> Login </h1>
       
       <form onSubmit={handleSubmit}> 
        <div className="div-form">
          <input 
              type="text" 
              placeholder="Username"
              onChange={handleChange}
              id="user" 
              name="username"
              value={formData.username}
            />
        </div>
        
        <div className="div-form">
          <input 
              type="password" 
              placeholder="Password"
              onChange={handleChange}
              id="pass" 
              name="password"
              value={formData.password}
          />
        </div>
        
        <div className="div-footer">
          <div className="div-footer-label">
            <label>Remember me 
              <input 
                type="checkbox"
                onChange={handleChange}
                id="remember"
                name="remember"
                value={formData.remember}
              />
            </label>
            <a href="www.google.com">Forgot your password?</a>
          </div>
          
          <button type="submit"> LOGIN </button> 
        </div>
       </form>

      <div className="div-new-user">
        <label>
          DON'T HAVE AN ACCOUNT? <Link to="/register">SIGN UP</Link>
        </label>
      </div>
     </div>
    </>
  );
} 