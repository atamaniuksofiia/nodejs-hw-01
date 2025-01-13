import { error } from 'node:console';
import { PATH_DB } from '../contacts/contacts.js';
import fs from 'node:fs/promises';
export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts;
    try {
      contacts = JSON.parse(data);
      if (!Array.isArray(contacts)) {
        throw new error('Файл не містить масив контактів');
      }
    } catch (error) {
      contacts = [];
      console.log(
        'Файл порожній або пошкоджений, створено новий порожній масив контактів',
        error,
      );
    }

    if (contacts.lenght > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log('Останній контакт був успішно видалений.');
    } else {
      console.log('Немає контактів для видалення.');
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
    throw error;
  }
};

removeLastContact();
