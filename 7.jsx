import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json();
    alert(data.message);
  }


  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App;
