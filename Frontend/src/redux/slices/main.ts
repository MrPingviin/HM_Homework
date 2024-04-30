import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    name: "Hello World!",
    value: 0
  },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { setName, incrementByAmount } = mainSlice.actions

export default mainSlice.reducer