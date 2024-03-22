import { Client, Account, ID} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65fd2aa868d5959ac125');


export const ACCOUNT = new Account(client);
export const UNIQUE_ID = ID.unique();