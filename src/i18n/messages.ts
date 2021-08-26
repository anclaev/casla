import { LOCALES } from "./locales"

const messages = {
  [LOCALES.ENGLISH]: {
    // Menu

    unAuthMessage: "Hi, stranger",

    // Auth Page

    morningMessage: "Good morning. Who are you?",
    dayMessage: "Good day. Who are you?",
    eveningMessage: "Good evening. Who are you?",
    nightMessage: "Good night. Who are you?",
    inputPlaceholder: "I`m a...",
  },
  [LOCALES.RUSSIAN]: {
    // Menu

    unAuthMessage: "Привет, странник",

    // Auth Page

    morningMessage: "Доброе утро. Кто ты?",
    dayMessage: "Привет. Кто ты?",
    eveningMessage: "Добрый вечер. Кто ты?",
    nightMessage: "Доброй ночи. Кто ты?",
    inputPlaceholder: "Я...",
  },
}

export default messages
