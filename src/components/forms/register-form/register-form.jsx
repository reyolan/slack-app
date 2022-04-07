import { useState } from "react";
import styles from "./register-form.module.css";
import FormContainer from "components/ui/containers/form-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    //lagay dito yung formvalidation
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        name="email"
        label="EMAIL"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles.inputContainer}
      />
      <InputField
        name="passsword"
        label="PASSWORD"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <InputField
        name="confirm-password"
        label="CONFIRM PASSWORD"
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <Button type="submit" className={styles.registerBtn}>
        Register
      </Button>
    </FormContainer>
  );
}

export default RegisterForm;
