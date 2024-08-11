import React from "react";
import { StyledFooter, FooterNav, ContactInformation } from "./footerStyling";
import Logo from "../../components/logo";
import { navLinks } from "../header/header";
import { Link } from "react-router-dom";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { FaYoutube as Youtube } from "react-icons/fa";
import { FaTwitter as Twitter } from "react-icons/fa";
import { FaPinterest as Pint } from "react-icons/fa";
import { FaInstagram as Insta } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterNav>
        <Logo />
        <span className="nav-links">
          {navLinks.length === 0 ? (
            <p className="error">No Links Found...</p>
          ) : (
            navLinks.map((link) => (
              <Link
                to={link.path}
                className="nav-link"
                key={link.name}
                aria-label={`link to the ${link.name} page`}
              >
                {link.name}
              </Link>
            ))
          )}
        </span>
      </FooterNav>
      <ContactInformation>
        <ul className="contact-list">
          <li className="bold">Designo Central Office</li>
          <li>3886 Wellington Street</li>
          <li>Toronto, Ontario M9C 3J5</li>
        </ul>
        <ul className="contact-list ">
          <li className="bold">Contact Us (Central Office)</li>
          <li>P : +1 253-863-8967</li>
          <li>M : contact@designo.com</li>
        </ul>
        <ul className="socials-list">
          <li>
            <Facebook />
          </li>
          <li>
            <Youtube />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Pint />
          </li>
          <li>
            <Insta />
          </li>
        </ul>
      </ContactInformation>
    </StyledFooter>
  );
}
