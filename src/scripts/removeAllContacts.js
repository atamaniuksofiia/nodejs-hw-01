import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const emptyDb = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyDb, null, 2), 'utf8');
    console.log('Всі контакти були успішно видалені.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
    throw error;
  }
};

removeAllContacts();
