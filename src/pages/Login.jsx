import LoginContainer from "components/login/login-container";
import LoginForm from "components/login/login-form/login-form";
import Header from "components/ui/header";
import Button from "components/ui/button";

function Login() {
  return (
    <LoginContainer>
      <Header>Welcome</Header>
      <LoginForm />
      <Button>Log In</Button>
    </LoginContainer>
  );
}

export default Login;
