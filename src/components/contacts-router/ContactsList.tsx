
import {getContacts} from '../../lib/api'
import type { Contact } from '../../lib/types'
import { useLoaderData } from 'react-router'

function ContactsList() {
  // loader for loading contacts (exporting loader) + displaying them

  const {data} = useLoaderData() as {data: Contact[]}

  return (
    <>
      <div>ContactsList</div>
      <div>{`This is the Contacts Length: ${data?.length}`}</div>
    </>
  )
}

export const loader = async ():Promise<Contact[]> => {
  const data = await getContacts()
  return data
}

export default ContactsList