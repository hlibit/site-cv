import { techIcons } from "./techIcons";

export const resumeFields = [
  {
    fieldName: "Освіта",
    title: "Моя освіта",
    description: "Моє навчання та сертифікації у сфері розробки.",
    data: [
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web1 Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web2 Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web3 Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web4 Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web5 Development",
        itemPlace: "Online Course",
      },
      {
        itemYear: 2023,
        itemTitle: "Fullstack Web6 Development",
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
    data: {
      soft: [
        "Командна робота",
        "Критичне мислення",
        "Вирішення проблем",
        "Адаптивність",
        "Тайм-менеджмент",
      ],
      hard: [
        "JavaScript (ES6+)",
        "React & Next.js",
        "Node.js & Express.js",
        "MongoDB & PostgreSQL",
        "Docker & CI/CD",
      ],
    },
  },
  {
    fieldName: "Про мене",
    title: "Про мене",
    description: "Коротко про мене та мою мотивацію.",
    data: [
      {
        itemLabel: "Ім'я",
        itemValue: "Гліб Мазаєв",
      },
      {
        itemLabel: "Вік",
        itemValue: 23,
      },
      {
        itemLabel: "Вивчаю IT",
        itemValue: "2+ роки",
      },
      {
        itemLabel: "Досвід в (IT)",
        itemValue: "Був[Фріланс]",
      },
      {
        itemLabel: "Громадянство",
        itemValue: "Україна",
      },
      {
        itemLabel: "Мови",
        itemValue: "Англійська[B2], Українська, Німецька[А2]",
      },
    ],
  },
];
