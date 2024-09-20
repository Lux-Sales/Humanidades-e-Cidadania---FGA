interface Work {
  id: number;
  name: string;
  students: string[];
  summary: string;
  link: string;
}

export interface Year {
  firstSemester: Work[];
  secondSemester: Work[];
}

interface Classes {
  "2024": Year;
}

const classes: Classes = {
  "2024": {
    firstSemester: [
      {
        id: 1,
        name: "example 1 semester 1",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
      {
        id: 2,
        name: "example 1 semester 1",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
      {
        id: 3,
        name: "example 1 semester 1",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
      {
        id: 4,
        name: "example 1 semester 1",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
      {
        id: 5,
        name: "example 1 semester 1",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
    ],
    secondSemester: [
      {
        id: 1,
        name: "example 1 semester 2",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
    ],
  },
};

export default classes;
