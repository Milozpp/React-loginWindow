export default function LoginWindow() {
  return (
    <> 
     <div className="div-wrapper">
       <h1>Login</h1> 
       <div className="div-form">
         <input type="text" id="username" placeholder="Username"></input>
       </div>
       <div className="div-form">
        <input type="password" id="password" placeholder="Password"></input>
       </div>
       <div className="div-footer">
         <div className="div-footer-label">
           <div></div>
          <label>Remember me <input type="checkbox"></input></label>
          <a href="www.google.com">Forgot your password?</a>
        </div>
        <button type="submit"> LOGIN </button> 
       </div>
  </div>
    </>
  );
} 