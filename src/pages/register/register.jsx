import { Link } from "react-router-dom";
import styles from "./register.module.css";
import ColumnCenterContainer from "components/ui/containers/column-center-container";
import RegisterForm from "components/forms/register-form";
import RowContainer from "components/ui/containers/row-container";
import Header from "components/ui/texts/header";
import Text from "components/ui/texts/text";
import CenterContainer from "components/ui/containers/center-container";

function Register() {
  return (
    <CenterContainer className={styles.background}>
      <ColumnCenterContainer>
        <Header level={2} className={styles.title}>
          Create an Account
        </Header>
      </ColumnCenterContainer>
      <RegisterForm />
      <RowContainer>
        <Text>
          Already have an account? <Link to="/login">Login</Link>
        </Text>
      </RowContainer>
    </CenterContainer>
  );
}

export default Register;
