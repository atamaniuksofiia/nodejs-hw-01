import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, jsonData, 'utf8');
    console.log('Дані успішно записані у файл:', PATH_DB);
  } catch (error) {
    console.error('Помилка запису у файл:', error);
    throw error;
  }
};
