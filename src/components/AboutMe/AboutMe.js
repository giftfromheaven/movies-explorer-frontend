import React from "react";
import Title from "../Title/Title";
import Portrait from "../../images/aboutme/portrait.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <Title title="Студент" />
      <article className="about-me__container">
        <div className="about-me__container about-me__container_direction_column">
          <h3 className="about-me__title">Илья</h3>
          <p className="about-me__subtitle">Веб-разработчик, 26 лет</p>
          <p className="about-me__text">
            С детства увлекался программированием и ходил на курсы в МИЭТ, но
            потом я увлёкся творчеством, оставив программирование. Во время
            первого карантина 2020 года вновь заинтересовался программированием,
            попробовал Python и Java, но в итоге конечный выбор пал на
            Javascript.
          </p>
          <nav>
            <ul className="about-me__social-links-list">
              <li className="about-me__social-links-list-element">
                <a
                  className="about-me__social-link"
                  href="https://www.facebook.com/ilya.dykin"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="about-me__social-links-list-element">
                <a
                  className="about-me__social-link"
                  href="https://github.com/giftfromheaven/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img className="about-me__photo" src={Portrait} alt="Моя фотография" />
      </article>
    </section>
  );
}

export default AboutMe;
