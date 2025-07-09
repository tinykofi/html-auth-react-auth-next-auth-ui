import React, { useState } from "react";
import AuthForm from "./components/Authform.jsx";

export default function App() {
  const [loginMode, setLoginMode] = useState(true);

  return (
    <div
      style={{
        background: "#eee",
        height: "100vh",
        paddingTop: 100,
        fontFamily: "sans-serif",
      }}
    >
      <AuthForm isLogin={loginMode} />
      <p style={{ textAlign: "center", marginTop: 20 }}>
        {loginMode ? "No account?" : "Already have an account?"}
        <button
          onClick={() => setLoginMode(!loginMode)}
          style={{
            marginLeft: 8,
            background: "none",
            color: "#2980b9",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {loginMode ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
