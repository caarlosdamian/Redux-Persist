import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";
import "./login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.prventDefault();
  };
  return (
    <div className="login-wrap">
      <div className="login-content">
        <h1>Welcome</h1>
        <p>Please Login to your account</p>
        <form action="" onSubmit={handleSubmit}>
          <Input
            required
            label="User Name"
            placeholder="John doe"
            id="userName"
            name="username"
            habldeInput={(e) => setUserName(e.target.value)}
            value={userName}
            type='text'
          />
          <Input
            required
            label="Password"
            placeholder="*******"
            id="password"
            name="password"
            habldeInput={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
          />
          <Button label='login' />
        </form>
      </div>
    </div>
  );
};

export default Login;
