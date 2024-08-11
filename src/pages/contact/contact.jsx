import React from "react";
import { PageTemplate } from "../../styles/styledComponents";
import LocationLinksContainer from "../../components/locationLink";
import { LocationLinks } from "./contactStyling";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <PageTemplate>
      <ContactForm />
      <LocationLinks>
        <LocationLinksContainer />
      </LocationLinks>
    </PageTemplate>
  );
}
