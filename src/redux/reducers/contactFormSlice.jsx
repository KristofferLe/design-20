import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  validName: true,
  email: "",
  validEmail: true,
  phone: "",
  validPhone: true,
  message: "",
  validMessage: true,
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    validName: (state, action) => {
      state.validName = action.payload; // Correctly using action.payload
    },
    validEmail: (state, action) => {
      state.validEmail = action.payload; // Correctly using action.payload
    },
    validPhone: (state, action) => {
      state.validPhone = action.payload; // Correctly using action.payload
    },
    validMessage: (state, action) => {
      state.validMessage = action.payload; // Correctly using action.payload
    },
    clearForm: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.message = "";
      state.validName = true;
      state.validEmail = true;
      state.validPhone = true;
      state.validMessage = true;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setMessage,
  validName,
  validEmail,
  validPhone,
  validMessage,
  clearForm,
} = contactFormSlice.actions;

export default contactFormSlice.reducer;
