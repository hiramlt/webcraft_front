import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/inicio");
  };

  return (
    <>
      <body>
        <div className="main-container-login">
          <div className="login-form">
            <div className="login-top">
              <h1 className="title">WebCraft</h1>
              <p className="subtitle">Bienvenido otra vez</p>
            </div>
            <div className="login-mid">
              <input
                type="text"
                placeholder="Correo electronico"
                className="form-input"
                id="email-login"
              />
              <div className="passw-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="form-input"
                id="passw-login"
              />
              <div className="icon-passw">
                {showPassword ? 
                <AiOutlineEye size={22} opacity={0.7} onClick={togglePasswordVisibility}/> : 
                <AiOutlineEyeInvisible size={22} opacity={0.7} onClick={togglePasswordVisibility}/> 
                }
              </div>
              </div>
            </div>
            <div className="login-bottom">
              <button type="button" className="main-btn" onClick={handleLogin}>
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
