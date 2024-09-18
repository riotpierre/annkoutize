import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/register", {
        email,
        password,
      });
      alert("Inscription réussie !");
    } catch (error) {
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{ backgroundColor: "#afc1d0", padding: "20px" }}
    >
      <h2 style={{ color: "#2f3b69" }}>Inscription</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Adresse e-mail"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        required
      />
      <button
        type="submit"
        style={{ backgroundColor: "#d4bbdd", color: "#2f3b69" }}
      >
        S'inscrire
      </button>
    </form>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Connexion réussie !");
    } catch (error) {
      alert("Erreur lors de la connexion");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{ backgroundColor: "#afc1d0", padding: "20px" }}
    >
      <h2 style={{ color: "#2f3b69" }}>Connexion</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Adresse e-mail"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        required
      />
      <button
        type="submit"
        style={{ backgroundColor: "#d4bbdd", color: "#2f3b69" }}
      >
        Se connecter
      </button>
    </form>
  );
};

export { Register, Login };
