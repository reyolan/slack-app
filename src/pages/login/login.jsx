import ColumnCenterContainer from "components/ui/containers/column-center-container";
import ColumnContainer from "components/ui/containers/column-container";
import LoginForm from "components/login/login-form";
import Header from "components/ui/texts/header";
import Text from "components/ui/texts/text";
import RowContainer from "components/ui/containers/row-container";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  return (
    <ColumnCenterContainer>
      <ColumnContainer className={styles.loginContainer}>
        <ColumnCenterContainer>
          <Header level={2} className={styles.title}>
            Welcome back!
          </Header>
          <Header level={3} className={styles.text}>
            Good to see you again
          </Header>
        </ColumnCenterContainer>
        <LoginForm />
        <RowContainer>
          <Text>
            Don't have an account? <Link to="/register">Register</Link>
          </Text>
        </RowContainer>
      </ColumnContainer>
    </ColumnCenterContainer>
  );
}

export default Login;
