import React from "react";
import {store} from "../store/store";

export type ButtonColor = 'blue' | 'green' | 'yellow' | 'red'

export interface Price {
    [currency: string]: number
};


export type Currency<Base extends string> = {
    date: string;
} & {
    [k in Base]: Price
}

export type TCurrencyInput = {
    label: 'From' | "To",
    currencyValue: number,
    currencyList: string[],
    onCurrencyChange(currency: string): void
    onAmountChange?(amount: number): void
    value: string
}

export type Contact = {
    readonly id: string,
    name: string
    email?: string,
    number?: number
}

export type ActionResponse = {
    success: boolean,
    msg: string
}

export type User = {
    username: string,
    password: string
}

export type UserContextType = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// type for the whole centralized-store
export type RootState = ReturnType<typeof store.getState>;

// type for dispatch functions like useDispatch() 
export type AppDispatch = typeof store.dispatch;

export type TodoState = {id: string, todo: string}[]