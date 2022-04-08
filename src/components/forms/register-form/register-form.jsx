import { useState } from "react";
import styles from "./register-form.module.css";
import FormContainer from "components/ui/containers/form-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import { registerValidation } from "utils/form-validate";
import { postRequest } from "services/axios-resolver";
import Text from "components/ui/texts/text";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(registerValidation(email, password, confirmPassword));

    if (
      Object.values(errors).every(error => error === null) &&
      email &&
      password &&
      confirmPassword
    ) {
      const data = { email, password, password_confirmation: confirmPassword };
      postRequest("auth", data).then(res => {
        console.log(res);
        if (res.response) {
          setStatusMessage("Registration Success. Proceed to Login page.");
        } else {
          setStatusMessage("Registration Failed");
        }
      });
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
      {statusMessage && (
        <Text className={styles.statusMessage}>{statusMessage}</Text>
      )}
    </FormContainer>
  );
}

export default RegisterForm;
