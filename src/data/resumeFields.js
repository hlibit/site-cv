import { techIcons } from "./techIcons";

export const resumeFields = [
  {
    fieldName: "Освіта",
    title: "Моя освіта",
    description: "Моє навчання та сертифікації у сфері розробки.",
    data: [
      {
        itemYear: "2019-2023",
        itemTitle: "Автоматизовані механічні системи",
        itemPlace: "КПІ, Бакалавр",
      },
      {
        itemYear: "2023-2024",
        itemTitle: "Автоматизовані механічні системи",
        itemPlace: "КПІ, Магістр",
      },
      {
        itemYear: "2023-2024",
        itemTitle: "Full-Stack Developer",
        itemPlace: "Online Course,IT Step Academy",
      },
      {
        itemYear: "2024-2025",
        itemTitle: "The Ultimate React Course 2024",
        itemPlace: "Online Course, udemy",
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
