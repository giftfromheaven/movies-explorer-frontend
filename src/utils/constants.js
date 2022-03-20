export const regex = {
  name: "^[a-zA-Zа-яА-ЯЁё\\s\\-]+$",
  email: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
  // eslint-disable-next-line no-useless-escape
  url: "/^((http(s?)?)://)?([wW]{3}.)?[a-zA-Z0-9-.]+.[a-zA-Z]{2,}(.[a-zA-Z]{2,})?$/g",
};

export const EXIST_FOOTER_FOR_PAGE = ["/signin", "/signup", "/profile"];

export const SERVER_IMAGE_URL = "https://api.nomoreparties.co";
