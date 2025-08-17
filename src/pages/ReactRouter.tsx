import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "../components/contacts-router/RootLayout"
import ContactsList, {loader as contactsLoader} from "../components/contacts-router/ContactsList"
import CreateContact, {action as contactAction} from "../components/contacts-router/CreateContact"
import EditContact, { loader as editLoader} from "../components/contacts-router/EditContact"

function ReactRouter() {


    const router = createBrowserRouter([
        {
            path: "/",
            Component: RootLayout,
            children: [
                {
                    index: true, 
                    loader: async () => {
                        return {data: await contactsLoader()}
                    },
                    Component: ContactsList
                },  // loader -> show contacts
                {
                    path: 'new', 
                    Component: CreateContact,
                    action: ({request}) => contactAction(request)
                }, // action -> create contact
                {
                    path: ':id/edit',
                    loader: ({params}) => editLoader(params),
                    // action: ({request}) => editAction(request),
                    Component: EditContact
                },  // action -> editing contact
            ],
        }
    ])

  return <RouterProvider router={router}/>
}

export default ReactRouter