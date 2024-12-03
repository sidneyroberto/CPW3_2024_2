import Modal from "react-responsive-modal";

import styles from "./styles.module.css";

import { Contact } from "../../models/Contact";

type Props = {
  contact: Contact;
  open: boolean;
  onClose: () => void;
};

const ConfirmationDialog = ({ contact, open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose} center>
      <h1 className={`${styles.text} ${styles.title}`}>Confirmação</h1>

      <p className={`${styles.text} ${styles.question}`}>
        Deseja realmente apagar o contato {contact.name}?
      </p>

      <div className={styles.buttonPanel}>
        <button
          onClick={onClose}
          className={`${styles.button} ${styles.confirmationButton}`}
        >
          Sim
        </button>
        <button
          onClick={onClose}
          className={`${styles.button} ${styles.cancelButton}`}
        >
          Não
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
