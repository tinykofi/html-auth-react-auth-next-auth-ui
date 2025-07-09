import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div
      style={{
        padding: 20,
        maxWidth: 400,
        margin: "100px auto",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>
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
        Login
      </button>
      <p style={{ textAlign: "center", marginTop: 15 }}>
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          style={{ color: "#2980b9", textDecoration: "underline" }}
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
