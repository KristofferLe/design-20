import { configureStore } from "@reduxjs/toolkit";
import contactFormReducer from "./reducers/contactFormSlice";

const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
  },
});

export default store;
