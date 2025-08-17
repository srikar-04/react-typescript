import {v4 as uuidv4} from 'uuid';
import {type Contact} from './types';

const contacts: Contact[] = [];

export const getContacts = async (): Promise<Contact[]> => {
    // Simulating an API call to fetch contacts
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(contacts);
        }, 1000);
    });
}

export const getContact = async (id: string): Promise<Contact> => {
    console.log('this is the id that i am getting : ', id);

    console.log('this is contact array before dearching : ', contacts)
    
    const contact = contacts.find(contact => contact.id === id);
    if (!contact) {
        throw new Error('Contact not found');
    }
    return contact;
}

export const updateContact = async (id: string, data: Partial<Contact>) => {
    // updating contact according to provided id and data
    const index = contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
        throw new Error('Contact not found');
    }
    contacts[index] = {...contacts[index], ...data};
}

export const addContact = async (payload: Omit<Contact, 'id'>) => {
    contacts.push({...payload, id: uuidv4()});
}

