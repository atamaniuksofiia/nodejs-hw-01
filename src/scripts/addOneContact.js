import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const oneContact = createFakeContact();
    const allContacts = [...existingContacts, oneContact];
    await writeContacts(allContacts);
    console.log('Новий контакт успішно додано!');
  } catch (error) {
    console.error('Помилка під час додавання контакту:', error);
    throw error;
  }
};

addOneContact();
