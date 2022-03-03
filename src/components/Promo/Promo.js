import React from "react";
import PromoImage from "../../images/main/main_logo.svg";

// function Promo() {
//   return (
//     <section className="promo">
//       <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
//       <img alt="фоновая картинка" className="promo__image" src={PromoImage}/>
//     </section>
//   )
// }

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content-wrapper">
        <div className="promo__text-wrapper">
          <h1 className="promo__header">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button
            className="promo__button"
            type="button"
            aria-label="Узнать больше"
          >
            <a className="promo__button-link" href="#about-project">
              Узнать больше
            </a>
          </button>
        </div>
        <img
          className="promo__img"
          src={PromoImage}
          alt="Изображение земного шара"
        />
      </div>
    </section>
  );
}

export default Promo;
