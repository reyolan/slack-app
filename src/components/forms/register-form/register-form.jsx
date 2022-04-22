import { useState, useEffect } from "react";
import styles from "./register-form.module.css";
import FormContainer from "components/ui/containers/form-container";
import InputField from "components/ui/input-field";
import Button from "components/ui/button";
import { registerValidation } from "utils/form-validate";
import usePostRequest from "hooks/use-post-request";
import Text from "components/ui/texts/text";
import ErrorText from "components/ui/texts/error-text";
import { REGISTER_API } from "services/api";

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
  const [responseError, setResponseError] = useState("");
  const postRequest = usePostRequest(REGISTER_API);

  useEffect(() => {
    setErrors({ email: null, password: null, confirmPassword: null });
    setResponseError("");
  }, [email, password, confirmPassword]);

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
      postRequest(data).then(res => {
        if (res.error) {
          setResponseError(res.error.response.data.errors.full_messages[0]);
          throw new Error(res.error);
        }
        setStatusMessage("Registration Success! Please proceed to Login page.");
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
      <ErrorText>{responseError}</ErrorText>
      <Button type="submit" className={styles.registerBtn}>
        Register
      </Button>
      <Text className={styles.statusMessage}>{statusMessage}</Text>
    </FormContainer>
  );
}

export default RegisterForm;
