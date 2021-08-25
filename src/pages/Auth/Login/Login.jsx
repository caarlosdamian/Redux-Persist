import "./login.css";

const Login = () => {
  const handleSubmit = (e) => {
      e.prventDefault()
  };
  return (
    <div className="login-wrap">
      <div className="login-content">
        <h1>Welcome</h1>
        <p>Please Login to your account</p>
        <form action="" onSubmit={handleSubmit}>
            
        </form>
      </div>
    </div>
  );
};

export default Login;
