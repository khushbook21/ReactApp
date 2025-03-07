import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input style={{ margin: "10px" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input style={{ margin: "10px" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button style={{ margin: "10px" }} type="submit">Login</button>
      </form>
      <h2 className="pt-5" style={{ padding: '20px' }}> My list are decided </h2>
    </div>
  );
};

export default Login;