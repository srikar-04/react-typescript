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
                {index: true, Component: ContactsList},  // show contacts list
                {path: 'new', Component: CreateContact},    // creating new contact
                {path: ':id', Component: ContactDetails},   // showing contact details
                {path: ':id/edit', Component: EditContact},  // editing contact
            ],
        }
    ])

  return <RouterProvider router={router}/>
}

export default ReactRouter