import { Form, useLoaderData, type Params } from "react-router"
import { getContact } from "../../lib/api"
import type { Contact } from "../../lib/types"

function EditContact() {
  // action for edition contact along with the form
  // let params = useParams()

  const data = useLoaderData<Contact>()
  console.log('this is the data that we have got with that particular id : ', data);
  
  return (
    <div className="">
      <Form method="post" className="flex flex-col gap-4">
        <input type="text">{data.id}</input>
        <input type="text">{data.name}</input>
        <input type="text">{data.email}</input>
        <input type="text">{data.number}</input>
      </Form>
      <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">
        Submit 
      </button>
    </div>
  )
}

export const loader = async (params: Params) => {
  let id = params.id
  console.log('this is the params id in the loader : ', id)

  if(id) {
    const data = await getContact(id) as Contact
    return data
  }
}

// export const action = (request: Request) => {

// }

export default EditContact