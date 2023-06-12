import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  initialState: ['hey', 'hello'],
  name: 'crud',
  reducers: {
    onstore: (state, action) => {
      console.log('----', action.payload);
      state.push(action.payload);
    },
    onDelete: (state, action) => {
      state.splice(action.payload, 1);
    },
    onUpdate: (state, action) => {
    const {index,value} =action.payload;
    console.log("redux",index,value)
     state[index]=value
    },
  },
});

export const store = configureStore({
  reducer: {
    crud: counterSlice.reducer,
  },
});
