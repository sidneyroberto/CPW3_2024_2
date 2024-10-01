import styles from "./styles.module.css";

const BlocoTexto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Um bloco de texto</h1>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis cum,
        harum nisi consequatur iure, laborum ipsa voluptatum explicabo
        blanditiis porro iste modi debitis qui officia nulla dolore magni eos
        quia.
      </p>
    </div>
  );
};

export default BlocoTexto;
