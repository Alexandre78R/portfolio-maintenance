import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/Theme/ThemeContext";
import { useLang } from "@/context/Lang/LangContext";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Box from "@mui/material/Box";
import Button from "@/components/Button/Button";
import Modal from "@mui/material/Modal";
import ToggleButton from "../Button/ToggleButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar: React.FC = (): React.ReactElement => {
  const { lang, setLang, translations } = useLang();
  const { toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [open, setOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = React.useState<boolean>(false);
  const [isCheckedLang, setIsCheckedLang]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const handleOpen: () => void = (): void => setOpen(true);
  const handleClose: () => void = (): void => setOpen(false);

  const toggleMenu: () => void = (): void => setMenuOpen(!menuOpen);

  const handleChangeColorTheme: (newTheme: string) => void = (
    newTheme: string
  ): void => {
    toggleTheme(newTheme);
    handleClose();
    setMenuOpen(false);
  };

  useEffect(() => {
    setIsCheckedLang(translations.file === "en");
  }, [translations]);

  const toggleCheckedLang: () => void = (): void => {
    setIsCheckedLang(!isCheckedLang);
    setLang(lang === "fr" ? "en" : "fr");
  };

  return (
    <nav className="bg-body p-4 fixed top-0 left-0 w-full z-50">
      <section className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <button
            // onClick={(e) => handleScrollToSection(e, headerRef)}
            className="hover:text-secondary text-text font-bold text-xl"
          >
            {translations.navbarTitle}
          </button>
        </div>
        <menu className="hidden md:block">
          <ul className="flex space-x-5">
            <li>
              <a
                href="https://github.com/Alexandre78R"
                target="_blank"
                rel="alternate"
                title="Github"
              >
                <GitHubIcon className="text-text hover:text-secondary" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexandrerenard/"
                target="_blank"
                rel="alternate"
                title="Linkedin"
              >
                <LinkedInIcon className="text-text hover:text-secondary" />
              </a>
            </li>
            <li>
              <ToggleButton
                toggleChecked={toggleCheckedLang}
                option1="FR"
                option2="EN"
                isChecked={isCheckedLang}
              />
            </li>
            <li>
              <ColorLensIcon
                onClick={handleOpen}
                className="z-999 hover:text-secondary text-primary"
                fontSize="medium"
              />
            </li>
          </ul>
        </menu>
        <menu className="md:hidden">
          <button
            className="text-text focus:outline-none relative z-50"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16m-7 6h7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </menu>
      </section>
      {menuOpen && (
        <menu className="md:hidden bg-body fixed inset-y-0 right-0 z-40 w-64 px-4 py-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <ColorLensIcon
                onClick={handleOpen}
                className="hover:text-secondary text-primary"
              />
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <ToggleButton
                toggleChecked={toggleCheckedLang}
                option1="FR"
                option2="EN"
                isChecked={isCheckedLang}
              />
            </li>
          </ul>
        </menu>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-body absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 p-4 border-none">
          <div className="p-1">
            <Button
              onClick={() => handleChangeColorTheme("dark")}
              text={translations?.theme1}
            />
            <Button
              onClick={() => handleChangeColorTheme("light")}
              text={translations?.theme2}
            />
            <Button
              onClick={() => handleChangeColorTheme("ubuntu")}
              text={translations?.theme3}
            />
          </div>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
