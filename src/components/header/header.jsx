import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { StyledHeader, Nav } from "./headerStyling";
import Logo from "../logo";
import Hamburger from "./hamburger";

export const navLinks = [
  { name: "OUR COMPANY", path: "/about" },
  { name: "LOCATIONS", path: "/locations" },
  { name: "CONTACT", path: "contact" },
];

export default function Header() {
  const [$menuOpen, setMenuOpen] = useState(false);

  const menuThreshold = useMediaQuery({ query: "(min-width: 768px)" });
  useEffect(() => {
    if (menuThreshold) setMenuOpen(false);
  }, [menuThreshold]);

  return (
    <StyledHeader>
      <Logo />
      <Nav role="navigation" $menuOpen={$menuOpen}>
        {navLinks.length === 0 ? (
          <p className="error">No Links Available</p>
        ) : (
          navLinks.map((link) => (
            <Link
              className="nav-link"
              key={link.name}
              to={link.path}
              aria-label={`link to the ${link.name} page`}
              tabIndex={0}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))
        )}
      </Nav>
      {!menuThreshold && (
        <Hamburger
          $menuOpen={$menuOpen}
          setMenuOpen={() => setMenuOpen(!$menuOpen)}
          tabIndex={0}
        />
      )}
    </StyledHeader>
  );
}
