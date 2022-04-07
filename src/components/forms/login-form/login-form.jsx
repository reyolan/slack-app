import InputField from "components/ui/input-field";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login-form.module.css";
import Button from "components/ui/button";
import FormContainer from "components/ui/containers/form-container";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import { loginValidation } from "utils/form-validate";
import resolveAxios from "services/axios-resolver";

function LoginForm() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(loginValidation(email, password));

    if (
      Object.values(errors).every(error => error === null) &&
      email &&
      password
    ) {
      resolveAxios("/api/v1/auth/sign_in", "POST", { email, password }).then(
        res => {
          console.log(res);
          // if (res.response) {
          //   setIsAuthenticated(true);
          // }
        }
      );
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        name="email"
        label="EMAIL"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={errors.email}
        className={styles.inputContainer}
      />
      <InputField
        name="password"
        label="PASSWORD"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={errors.password}
      />
      <Button type="submit" className={styles.loginBtn}>
        Login
      </Button>
    </FormContainer>
  );
}

export default LoginForm;
