import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__list">
        <a
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/giftfromheaven/how_to_learn"
        >
          Статичный сайт
          <p className="portfolio__list-element">↗</p>
        </a>
        <a
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/giftfromheaven/russian-travel"
        >
          Адаптивный сайт
          <p className="portfolio__list-element">↗</p>
        </a>
        <a
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/giftfromheaven/react-mesto-api-full"
        >
          Одностраничное приложение
          <p className="portfolio__list-element">↗</p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
