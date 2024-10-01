import BlocoTexto from "./components/BlocoTexto";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <h1 className={styles.titulo}>Aquecimento com React</h1>
      <p className={styles.paragrafo}>
        Primeiro projeto utilizando React com TypeScript e Vite.
      </p>

      <BlocoTexto />
    </>
  );
};

export default App;
