import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState } from "../lib/types";

const initialState:TodoInitialState = [
    {
        id: nanoid(),
        todo: 'initial todo'
    },
]

export const todoSlice = createSlice({
    name: 'todo-redux',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{todo: string}>) => {
            state.push({
                id: nanoid(),
                todo: action.payload.todo
            })
        },
        removeTodo: (state, action: PayloadAction<{id: string}>) => {
            return state.filter(todo => todo.id !== action.payload.id)
        }
    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer