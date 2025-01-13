import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const allContacts = [...existingContacts, ...newContacts];
    await writeContacts(allContacts);
    console.log(`${number} нових контактів успішно додано!`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error);
    throw error;
  }
};

generateContacts(5);
