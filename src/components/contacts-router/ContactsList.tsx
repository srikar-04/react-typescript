
import {getContacts} from '../../lib/api'
import type { Contact } from '../../lib/types'
import { useLoaderData } from 'react-router'

function ContactsList() {
  // loader for loading contacts (exporting loader) + displaying them

  const {data} = useLoaderData() as {data: Contact[]}

  return (
    <>
      <div>ContactsList</div>
      <div>
        {data.map((field) => {
          return (
            <div className='px-8 py-6 bg-pink-200 mb-3 text-lg rounded-xl'>
              <div>{`id: ${field.id}`}</div>
              <div>{`name: ${field.name}`}</div>
              <div>{`email: ${field.email}`}</div>
              <div>{`number: ${field.number}`}</div>
            </div>
          )
        })}
      </div>
      <div>{`This is the Contacts Length: ${data?.length}`}</div>
    </>
  )
}

export const loader = async ():Promise<Contact[]> => {
  const data = await getContacts()
  return data
}

export default ContactsList