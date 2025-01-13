import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Контакти:', contacts);
    return contacts;
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error);
    throw error;
  }
};

console.log(await getAllContacts());
