import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [donnéesFormulaire, setDonnéesFormulaire] = useState({
    nom: "",
    email: "",
    motDePasse: "",
  });

  const { nom, email, motDePasse } = donnéesFormulaire;

  const onChange = (e) =>
    setDonnéesFormulaire({
      ...donnéesFormulaire,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const nouvelUtilisateur = { nom, email, motDePasse };
    try {
      const res = await axios.post("/api/auth/inscription", nouvelUtilisateur);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="nom"
        value={nom}
        onChange={onChange}
        placeholder="Nom"
        required
      />
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
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Inscription;
