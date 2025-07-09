export default function AuthForm({ isLogin }) {
  return (
    <div
      style={{
        padding: 20,
        maxWidth: 500,
        margin: "auto",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{isLogin ? "Login" : "Sign Up"}</h2>
      <input
        placeholder="Username"
        style={{
          display: "block",
          marginBottom: 15,
          padding: 10,
          width: "90%",
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      />
      <input
        placeholder="Password"
        type="password"
        style={{
          display: "block",
          marginBottom: 15,
          padding: 10,
          width: "90%",
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      />
      <button
        style={{
          width: "95%",
          padding: 10,
          background: "#2c3e50",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}
