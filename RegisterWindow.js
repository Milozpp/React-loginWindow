import React from "react"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import './RegisterWindow.css'
import swal from 'sweetalert';


export default function RegisterWindow() {

  const history = useHistory();

  const [formData, setFormData] = React.useState( {name: "", surname: "", birthdate:"", username: "", password: "", passwordConfirm: ""} )


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
      let res = await fetch("http://localhost/api/auth/register/", {
        method: "POST", 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          username: formData.username,
          password: formData.password,
        }),
      });
              
      let resJson = await res.json();

      if (res.status !== 200) {

        swal({
          title: resJson.message,
          icon: "warning",
          dangerMode: true,
          timer: 2500,
        })

      } else {

        swal({
          title: "User " + formData.username + " created",
          icon: "success",
          timer: 2500,
        })
        
        history.push("/");
      }

      
    } catch (err) {
      console.log(err);
    }
  };
  
    return (
      <> 
        <div className="div-wrapper-register">   
                 
          <h1> Register </h1>
           
          <form onSubmit={handleSubmit}>
            <div className="div--info">
              <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                id="name"
                name="name"
                value={formData.name}
              />
              <input
                type="text"
                placeholder="Surname"
                onChange={handleChange}
                id="surname"
                name="surname"
                value={formData.surname}
              />
              
            </div>
            <div className="div--info">
              <input
                  type="date"
                  onChange={handleChange}
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                />
              
              <select name="sex" id="sex">
                <option value="">Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="div-other-info">
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              id="username"
              name="username"
              value={formData.username}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              id="password"
              name="password"
              value={formData.password}
            />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={handleChange}
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
            />
            </div>

            <div className="div--register">             
              <button type="submit"> SIGN UP </button>
            </div>
            <div className="div--register-label">
              <label>
                  ALREADY HAVE AN ACCOUNT? <Link to="/"> SIGN IN</Link>
              </label>
            </div>
          </form>
        </div>
      </>
    );
} 