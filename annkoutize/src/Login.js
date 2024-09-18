import React, { useState } from "react";
import axios from "axios";

const Connexion = () => {
  const [donnéesFormulaire, setDonnéesFormulaire] = useState({
    email: "",
    motDePasse: "",
  });

  const { email, motDePasse } = donnéesFormulaire;

  const onChange = (e) =>
    setDonnéesFormulaire({
      ...donnéesFormulaire,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const utilisateur = { email, motDePasse };
    try {
      const res = await axios.post("/api/auth/connexion", utilisateur);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="motDePasse"
        value={motDePasse}
        onChange={onChange}
        placeholder="Mot de passe"
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Connexion;
