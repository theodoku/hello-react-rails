import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRandomGreeting = createAsyncThunk(
  "greetings/random",
  async () => {
    const res = await fetch("/random_greeting.json");
    const greeting = await res.json();
    const message = greeting.greeting;
    return message;
  }
);

const initialState = {
  message: "",
};

const greetingsSlice = createSlice({
  name: "greetings",
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
