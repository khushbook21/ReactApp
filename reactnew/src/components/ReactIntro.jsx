import { useState } from "react";

const Login = () => {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // Call API or authentication logic here
  };

  return (
    <div >
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

      <h2 className="pt-5" style={{ padding: '20px' }}>List in react js learn</h2>
    </div>
  );

};

export default Login;