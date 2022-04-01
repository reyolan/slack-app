import InputField from "components/ui/input-field";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    setError(null);
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        name="email"
        label="EMAIL"
        type="email"
        placeholder="Enter your email"
        onChange={e => setEmail(e.target.value)}
        error={error}
      />
      <InputField
        name="password"
        label="PASSWORD"
        type="password"
        placeholder="Enter your password"
        onChange={e => setPassword(e.target.value)}
        error={error}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
