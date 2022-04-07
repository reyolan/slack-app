import { useState } from "react";
import styles from "./register-form.module.css";
import FormContainer from "components/ui/containers/form-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import { registerValidation } from "utils/form-validate";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(registerValidation(email, password, confirmPassword));

    if (Object.values(errors).every(error => error === null)) {
      console.log("success");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <InputField
        name="email"
        label="EMAIL"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles.inputContainer}
        error={errors.email}
      />
      <InputField
        name="passsword"
        label="PASSWORD"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={errors.password}
      />
      <InputField
        name="confirm-password"
        label="CONFIRM PASSWORD"
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
      />
      <Button type="submit" className={styles.registerBtn}>
        Register
      </Button>
    </FormContainer>
  );
}

export default RegisterForm;
