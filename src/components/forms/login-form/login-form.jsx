import InputField from "components/ui/input-field";
import { useState } from "react";
import styles from "./login-form.module.css";
import Button from "components/ui/button";
import FormContainer from "components/ui/containers/form-container";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      setError("- This field is required");
      return;
    }

    setError(null);
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        name="email"
        label="EMAIL"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={error}
        className={styles.inputContainer}
      />
      <InputField
        name="password"
        label="PASSWORD"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={error}
      />
      <Button type="submit" className={styles.loginBtn}>
        Login
      </Button>
    </FormContainer>
  );
}

export default LoginForm;
