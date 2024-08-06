interface Work {
  name: string;
  students: string[];
  summary: string;
  link: string;
}

interface Year {
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
        name: "example 1 semester 1",
        students: ["maria", "roberta", "joao"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque debitis magnam harum in voluptatibus voluptate optio dolor pariatur, porro fugit libero hic consectetur amet enim voluptates ea non reiciendis magni.",
        link: "https://google.com.br",
      },
    ],
    secondSemester: [
      {
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
