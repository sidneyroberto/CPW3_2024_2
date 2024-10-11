import React, { useState } from "react";
import { useMask } from "@react-input/mask";
import EmailValidator from "email-validator";

import styles from "./styles.module.css";
import Header from "../../components/Header";
import { Contact } from "../../models/Contact";
import ContactCard from "../../components/ContactCard";

const Home = () => {
  /**
   * State (estado do componente)
    Stateful component -> É um componente que manipula dados em seu state
    Stateless component -> É um componente que não manipula 
    dados em  seu state
   */

  /**
   * useState -> hook do React para criar uma nova propriedade
   * dentro do state do componente
   */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  // Utiliza um generic para tipar o array
  const [contacts, setContacts] = useState<Contact[]>([]);

  const saveContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact = new Contact(name, phone, email);
    contact.address = address || undefined;
    contact.birthday = birthday ? new Date(birthday) : undefined;
    // Utilizando o spread operator
    setContacts([contact, ...contacts]);
    setName("");
    setPhone("");
    setEmail("");
    setBirthday("");
    setAddress("");
  };

  const phoneRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });

  const areInputsInvalid = () => {
    if (name.length === 0) {
      return true;
    }

    if (!EmailValidator.validate(email)) {
      return true;
    }

    if (phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/) === null) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <Header title="Início" />

      <form className={styles.contactForm} onSubmit={saveContact}>
        <label htmlFor="name">Nome*:</label>
        <input
          type="text"
          name="name"
          value={name}
          required
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity("O nome deve ser preenchido");
          }}
          onChange={(e) => {
            setName(e.target.value);
            e.currentTarget.setCustomValidity("");
          }}
        />

        <label htmlFor="phone">Telefone*:</label>
        <input
          ref={phoneRef}
          placeholder="(__) _____-____"
          type="tel"
          name="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">E-Mail*:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="address">Endereço:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="birthday">Data de nascimento:</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <input type="submit" value="Salvar" disabled={areInputsInvalid()} />
      </form>

      {contacts.length > 0 && (
        <div className={styles.contacts}>
          {contacts.map((c, index) => (
            <ContactCard key={index} contact={c} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
