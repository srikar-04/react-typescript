import React from "react";
import type {UserContextType } from "../lib/types";

const UserContext = React.createContext<UserContextType | null>(null)

export default UserContext;