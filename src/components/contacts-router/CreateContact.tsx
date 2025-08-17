import { Form, useActionData } from "react-router"
import { addContact } from "../../lib/api"
import type { ActionResponse, Contact } from "../../lib/types"

function CreateContact() {
  // action for creating contact (exporting it) + displaying the form containing 
  // all the information for adding new contact

  const actionData = useActionData<ActionResponse>()
  console.log('action data : ', actionData);
  
  return (
    <>
      <Form method="post" className="flex flex-col gap-4">
        <input type="text" placeholder="name" id="name" name="name"/>
        <input type="email" placeholder="email" id="email" name="email"/>
        <input type="tel" placeholder="number" id="number" name="number"/>
        <button className="bg-blue-500 p-2 rounded-md text-white" type="submit">Submit</button>
      </Form>
      {actionData ? actionData.success ? <span className="font-semibold text-green-500">{actionData.msg}</span> : <span className="font-semibold text-red-500">{actionData.msg}</span>  : <span></span> }
    </>
  )
}

export const action = async (request: Request) => {

  let formData = await request.formData()
  let name = formData.get('name')
  let email = formData.get('email')
  let number = Number(formData.get('number'))


  if(typeof name === "string" && typeof email === 'string' && (number && typeof number === 'number')) {
    console.log('inside success condition');
    await addContact({name, email, number})
    return {
      success: true,
      msg: 'succesfully added a new contact'
    } as ActionResponse
  } else {
    return {
      success: false,
      msg: 'failed to add a new contact'
    } as ActionResponse
  }
}

export default CreateContact