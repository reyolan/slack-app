import ColumnCenterContainer from "components/ui/containers/column-center-container";
import LoginForm from "components/forms/login-form";
import Header from "components/ui/texts/header";
import Text from "components/ui/texts/text";
import RowContainer from "components/ui/containers/row-container";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import CenterContainer from "components/ui/containers/center-container";

function Login() {
  return (
    <CenterContainer className={styles.background}>
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
    </CenterContainer>
  );
}

export default Login;
