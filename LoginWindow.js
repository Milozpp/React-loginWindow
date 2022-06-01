import React from "react"

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
    console.log(formData)
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
          remember: formData.remember
        }),
      });
      
      let resJson = await res.json();
      console.log(resJson);

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
              id="username" 
              name="username"
              value={formData.username}
            />
        </div>
        
        <div className="div-form">
          <input 
              type="password" 
              placeholder="Password"
              onChange={handleChange}
              id="password" 
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
                checked={formData.remember}
              />
            </label>
            <a href="www.google.com">Forgot your password?</a>
          </div>
          
          <button type="submit"> LOGIN </button> 
        </div>
       </form>
     </div>
    </>
  );
} 