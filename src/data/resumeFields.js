import { techIcons } from "./techIcons";

export const resumeFields = [
  {
    fieldName: "Освіта",
    title: "Моя освіта",
    description: "Моє навчання та сертифікації у сфері розробки.",
    data: [
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web Development",
        itemPlace: "Online Course",
      },
    ],
  },
  {
    fieldName: "Технології",
    title: "Технології",
    description: "Стек технологій, з якими я працюю.",
    data: [
      { itemTitle: "JavaScript", itemPhoto: techIcons.Js },
      { itemTitle: "React", itemPhoto: techIcons.React },
      { itemTitle: "NodeJs", itemPhoto: techIcons.NodeJs },
      { itemTitle: "CSS 3", itemPhoto: techIcons.CSS },
      { itemTitle: "Tailwind CSS", itemPhoto: techIcons.Tailwind },
    ],
  },
  {
    fieldName: "Скіли",
    title: "Скіли",
    description: "Основні навички, які я використовую у роботі.",
    data: [
      {
        itemTitle: "Frontend",
        itemDescription: "Адаптивна та доступна верстка",
      },
      { itemTitle: "Backend", itemDescription: "REST API, GraphQL" },
      { itemTitle: "DevOps", itemDescription: "Docker, CI/CD, AWS" },
      { itemTitle: "Тестування", itemDescription: "Jest, Cypress" },
      { itemTitle: "Командна робота", itemDescription: "Agile, Scrum, Git" },
    ],
  },
  {
    fieldName: "Про мене",
    title: "Про мене",
    description: "Коротко про мене та мою мотивацію.",
    data: [
      {
        itemTitle: "Розробник, який любить код",
        itemDescription:
          "Мене звати [Ваше ім'я], я займаюся веб-розробкою та створенням сучасних застосунків. Люблю чистий код, ефективні рішення та постійний розвиток.",
      },
      {
        itemTitle: "Досвід роботи",
        itemDescription: "Розробка веб-застосунків, API та оптимізація UI/UX.",
      },
    ],
  },
];
