import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    return count;
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error);
    throw error;
  }
};

console.log(await countContacts());
