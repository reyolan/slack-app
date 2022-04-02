import LoginContainer from "components/login/login-container";
import LoginForm from "components/login/login-form";
import Header from "components/ui/header";
import Button from "components/ui/button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginContainer>
      <Header>Welcome</Header>
      <LoginForm />
      <Button>Log In</Button>
      <Link to="/register">Register</Link>
    </LoginContainer>
  );
}

export default Login;
