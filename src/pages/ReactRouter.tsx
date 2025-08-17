import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "../components/contacts-router/RootLayout"
import ContactsList from "../components/contacts-router/ContactsList"
import CreateContact from "../components/contacts-router/CreateContact"
import EditContact from "../components/contacts-router/EditContact"
import ContactDetails from "../components/contacts-router/ContactDetails"

function ReactRouter() {


    const router = createBrowserRouter([
        {
            path: "/",
            Component: RootLayout,
            children: [
                {index: true, Component: ContactsList},  // loader -> show contacts
                {path: 'new', Component: CreateContact}, // action -> create contact
                {path: ':id', Component: ContactDetails}, // loader -> show specific contact
                {path: ':id/edit', Component: EditContact},  // action -> editing contact
            ],
        }
    ])

  return <RouterProvider router={router}/>
}

export default ReactRouter