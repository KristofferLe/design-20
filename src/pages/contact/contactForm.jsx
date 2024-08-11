import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleExclamation as Warning } from "react-icons/fa6";
import {
  setName,
  setEmail,
  setMessage,
  setPhone,
  validEmail,
  validPhone,
  validName,
  validMessage,
  clearForm,
} from "../../redux/reducers/contactFormSlice";
import {
  circleStyle,
  StyledContactForm,
  TextContainer,
  InputContainer,
} from "./formStyling";
import { Circle } from "../../components/CTA";
import { H2, Body, ButtonDark } from "../../styles/styledComponents";

export default function ContactForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.contactForm);
  const [errors, setErrors] = useState({}); // Local state for errors

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const isValidName = formData.name.length > 3;
    const isValidEmail = emailRegex.test(formData.email);
    const isValidPhone = phoneRegex.test(formData.phone);
    const isValidMessage = formData.message.length > 10;

    // Set errors in local state
    setErrors({
      name: !isValidName,
      email: !isValidEmail,
      phone: !isValidPhone,
      message: !isValidMessage,
    });

    // Dispatch validation actions based on individual field validity
    dispatch(validName(isValidName));
    dispatch(validEmail(isValidEmail));
    dispatch(validPhone(isValidPhone));
    dispatch(validMessage(isValidMessage));

    // Check if all fields are valid
    if (isValidName && isValidEmail && isValidPhone && isValidMessage) {
      console.log("Form Submitted:", formData);
      dispatch(clearForm());
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        dispatch(setName(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "phone":
        dispatch(setPhone(value));
        break;
      case "message":
        dispatch(setMessage(value));
        break;
      default:
        break;
    }
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <Circle style={circleStyle} />
      <TextContainer>
        <H2>Contact Us</H2>
        <Body>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </Body>
      </TextContainer>
      <InputContainer>
        <span className="input-box">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && (
            <p className="validation-message">
              Name must be at least 3 characters <Warning />
            </p>
          )}
        </span>
        <span className="input-box">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="validation-message">
              Enter a valid email address <Warning />
            </p>
          )}
        </span>
        <span className="input-box">
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="validation-message">
              Enter a valid phone number <Warning />
            </p>
          )}
        </span>
        <span className="input-box">
          <textarea
            placeholder="Your Message"
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="validation-message">
              At least 10 letters <Warning />
            </p>
          )}
        </span>
        <ButtonDark type="submit">SUBMIT</ButtonDark>
      </InputContainer>
    </StyledContactForm>
  );
}
