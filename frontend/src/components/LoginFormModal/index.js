import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
          console.log(errors.credential);
        }
      });
  };

  const handleLogInDemo = (e) => {
    e.preventDefault();
    const demoAcc = "Sylvanas_Windrunner";
    const demoPassword = "password";
    return dispatch(
      sessionActions.login({ credential: demoAcc, password: demoPassword })
    )
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  // disable login if username has less than 4 char and password less than 6 char
  const disableLogIn = credential.length < 4 || password.length < 6;

  return (
    // login
    <div className="login-container">
      <h1>Log In</h1>

      <form onSubmit={handleSubmit} className="login-form">
      <label>Username or Email</label>
        <label>
          <input
            placeholder="Username or Email"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && <p>{errors.credential}</p>}
      </form>
        <button type="submit" disabled={disableLogIn}>
          Log In
        </button>
      <button onClick={handleLogInDemo}>Log in as Demo User</button>
    </div>
  );
}

export default LoginFormModal;
