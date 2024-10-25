import { doc, getDoc, setDoc } from "firebase/firestore";

import { Contact, contactConverter } from "../models/Contact";
import { store } from "../config/firebase";
import { FirebaseContainer } from "../models/FirebaseContainer";

export class ContactService {
  async save(contact: Contact) {
    const id = this._generateId(contact.ownerEmail, contact.email);
    const ref = doc(
      store,
      FirebaseContainer.CONTACTS_COLLECTION_NAME,
      id
    ).withConverter(contactConverter);

    await setDoc(ref, contact);
  }

  async findByOwnerEmailAndContactEmail(
    ownerEmail: string,
    contactEmail: string
  ) {
    const id = this._generateId(ownerEmail, contactEmail);
    const ref = doc(
      store,
      FirebaseContainer.CONTACTS_COLLECTION_NAME,
      id
    ).withConverter(contactConverter);

    const snapshot = await getDoc(ref);
    return snapshot.data();
  }

  private _generateId(ownerEmail: string, contactEmail: string) {
    return `${ownerEmail}|${contactEmail}`;
  }
}
