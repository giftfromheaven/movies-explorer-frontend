import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

function Navigation({ place }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => setIsMobileMenuOpen(true);
  const onMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navigation">
      <Logo />
      <ul
        className={`navigation__films ${
          place === "landing" ? "navigation__films_hidden" : ""
        }`}
      >
        <li className="navigation__films-element">
          <Link
            to="/movies"
            className={`navigation__link ${
              place === "movies" ? "navigation__link_active" : ""
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li className="navigation__films-element">
          <Link
            to="/saved-movies"
            className={`navigation__link ${
              place === "saved-movies" ? "navigation__link_active" : ""
            }`}
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <div
        className={`navigation__login ${
          place !== "landing" ? "navigation__login_hidden" : ""
        }`}
      >
        <Link to="/signup" className="navigation__login-element">
          Регистрация
        </Link>
        <Link to="/signin">
          <button className="navigation__button navigation__login-element">
            Войти
          </button>
        </Link>
      </div>
      <Link
        to="/profile"
        className={`navigation__profile-edit navigation__profile-edit_place_header ${
          place === "landing" ? "navigation__profile-edit_hidden" : ""
        }`}
      >
        <div className="navigation__profile-icon-wrapper">
          <span className="navigation__profile-text">Аккаунт</span>
        </div>
      </Link>
      <button
        className={`navigation__burger-button ${
          isMobileMenuOpen || place === "landing"
            ? "navigation__burger-button_hidden"
            : ""
        }`}
        type="button"
        onClick={handleMobileMenuOpen}
      ></button>
      <Menu
        isOpened={isMobileMenuOpen}
        onMobileMenuClose={onMobileMenuClose}
        place={place}
      />
    </nav>
  );
}

export default Navigation;

// import React, { useEffect } from "react";
// import userpic from "../../images/profile-icon.svg";
// import "./Navigation.css";
// import { Link } from "react-router-dom";
// import { Logo } from "../Logo/Logo";
// import { Menu } from "../Menu/Menu";

// export function Navigation() {
//   //Стейт гамбургер меню
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   //Открытие меню
//   function openMenu() {
//     setIsMenuOpen(true);
//   }
//   //Закрытие по нажатию на кнопку
//   function closeMenu() {
//     setIsMenuOpen(false);
//   }
//   //Закрытие по нажатию на esc
//   useEffect(() => {
//     const closeByEscape = (e) => {
//       if (e.key === "Escape") {
//         closeMenu();
//       }
//     };
//     document.addEventListener("keydown", closeByEscape);
//     //!!clean up функция через return
//     return () => document.removeEventListener("keydown", closeByEscape);
//   }, []);
//   //Закрытие по нажатию на свободное место за попапом
//   useEffect(() => {
//     const closeByClick = (e) => {
//       if (e.target.classList.contains("Menu")) {
//         closeMenu();
//       }
//       e.stopPropagation();
//     };
//     document.addEventListener("click", closeByClick);
//     return () => document.removeEventListener("click", closeByClick);
//   }, []);

//   return (
//     <nav className="nav">
//       <div className="nav__wrapper">
//         <Logo />
//         <Link className="nav__link" to="/movies">
//           Фильмы
//         </Link>
//         <Link className="nav__link" to="/saved-movies">
//           Сохраненные фильмы
//         </Link>
//       </div>
//       <Link className="nav__profile-link transition-link" to="/profile">
//         <p>Аккаунт</p>
//         <img src={userpic} alt="иконка юзера" />
//       </Link>
//       <Menu
//         isOpen={isMenuOpen}
//         onButtonClick={openMenu}
//         onClose={closeMenu}
//       />
//     </nav>
//   );
// }
