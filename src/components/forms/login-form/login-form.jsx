import InputField from "components/ui/input-field";
import { useState } from "react";
import styles from "./login-form.module.css";
import Button from "components/ui/button";
import FormContainer from "components/ui/containers/form-container";
import { useContext } from "react";
import { AuthContext } from "context/auth-context";
import { loginValidation } from "utils/form-validate";
import useAxiosPost from "hooks/use-axios-post";
import { storeInLocalStorage } from "utils/helpers";
import ErrorText from "components/ui/texts/error-text";

function LoginForm() {
  const { setIsAuthenticated, setLoginHeaders, setLoggedInId } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: null, password: null });
  const [statusMessage, setStatusMessage] = useState("");
  const { isPosting, postRequest } = useAxiosPost("auth/sign_in");

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(loginValidation(email, password));

    if (
      Object.values(errors).every(error => error === null) &&
      email &&
      password
    ) {
      postRequest({
        email,
        password,
      }).then(res => {
        console.log(res);
        if (res.response) {
          const {
            "access-token": accessToken,
            client,
            expiry,
            uid,
          } = res.response.headers;
          setLoginHeaders({
            headers: { "access-token": accessToken, client, expiry, uid },
          });
          setLoggedInId(res.response.data.data.id);
          storeInLocalStorage("id", res.response.data.data.id);
          setIsAuthenticated(true);
          return;
        }
        setStatusMessage("Invalid email or password");
      });
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
      <ErrorText>{statusMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
