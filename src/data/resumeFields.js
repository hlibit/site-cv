import { techIcons } from "./techIcons";

export const resumeFields = [
  {
    fieldName: "Освіта",
    title: "Моя освіта",
    description: "Мої здобутки в освіті та в навчанні в сфері розробки.",
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
      { itemTitle: "React", itemPhoto: techIcons.React },
      { itemTitle: "Vite", itemPhoto: techIcons.Vite },
      { itemTitle: "JavaScript", itemPhoto: techIcons.Js },
      { itemTitle: "HTML 5", itemPhoto: techIcons.HTML5 },
      { itemTitle: "CSS 3", itemPhoto: techIcons.CSS },
      { itemTitle: "Tailwind CSS", itemPhoto: techIcons.Tailwind },
      { itemTitle: "Styled Components", itemPhoto: techIcons.Styled },
      { itemTitle: "React Query", itemPhoto: techIcons.Reactquery },
      { itemTitle: "Redux", itemPhoto: techIcons.Redux },
      { itemTitle: "MongoDb", itemPhoto: techIcons.MongoDb },
      { itemTitle: "PostgreSQL", itemPhoto: techIcons.PostgreSql },
      { itemTitle: "NodeJs", itemPhoto: techIcons.NodeJs },
    ],
  },
  {
    fieldName: "Скіли",
    title: "Скіли",
    description: "Основні навички, які я використовую у роботі.",
    data: {
      soft: [
        "Вирішення проблем",
        "Бажання навчатися",
        "Стресостійкість",
        "Тайм-менеджмент",
        "Адаптивність",
        "Командна робота",
        "Критичне мислення",
        "Вміння слухати",
        "Креативний підхід",
      ],
      hard: [
        "React.js",
        "Vite",
        "React Query & Redux",
        "JavaScript (ES6+)",
        "HTMl 5 & CSS 3",
        "Tailwind CSS",
        "Styled Components",
        "MongoDB & PostgreSQL",
        "Node.js & Express.js",
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
