import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo: []
}
const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const text = action.payload
            state.todo = [...state.todo, { id: Date.now(), text: text, completed: false }]
        },
        removetodo: (state, action) => {
            const id = action.payload
            state.todo = state.todo.filter((p) => p.id !== id)
        },
        toggletodo: (state, action) => {
            const id = action.payload
            state.todo = state.todo.map((p)=> 
                p.id ===id ?  {...p,completed: !p.completed } : p
        );
    },
    


    }
});

export default TodoSlice.reducer;
export const { addtodo, removetodo,toggletodo } = TodoSlice.actions;