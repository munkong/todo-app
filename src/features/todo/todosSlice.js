import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  values: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.values = [...state.values, action.payload ]
    },
    removeTodo: (state, action) => {
      state.values = state.values.filter((todo) => todo.id !== action.payload.id)
    },
  }
})

export const {addTodo, removeTodo} = todosSlice.actions;

export default todosSlice.reducer;
