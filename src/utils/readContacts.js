import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    console.log('Вміст файлу:', contacts);
    return contacts;
  } catch (error) {
    console.error('Помилка читання файлу:', error);
    throw error;
  }
};
