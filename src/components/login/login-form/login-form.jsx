import InputField from "components/ui/input-field";
import { useState } from "react";
import styles from "./login-form.module.css";
import Button from "components/ui/button";
import ColumnContainer from "components/ui/containers/column-container";

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
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <ColumnContainer className={styles.formInput}>
        <InputField
          name="email"
          label="EMAIL"
          type="email"
          onChange={e => setEmail(e.target.value)}
          error={error}
        />
        <InputField
          name="password"
          label="PASSWORD"
          type="password"
          onChange={e => setPassword(e.target.value)}
          error={error}
        />
        <Button type="submit" className={styles.loginBtn}>
          Login
        </Button>
      </ColumnContainer>
    </form>
  );
}

export default LoginForm;
