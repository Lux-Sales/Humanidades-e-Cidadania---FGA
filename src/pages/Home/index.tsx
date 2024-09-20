import React from "react";
import classes from "../../Projects/index";
import Header from "../../components/Header/Header";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectsPresentation from "../../components/ProjectsPresentation/ProjectsPresentation";

const Home = (): JSX.Element => {
  return (
    <div>
      <Header></Header>
      <ProjectsPresentation>
        <ProjectCards />
      </ProjectsPresentation>
    </div>
  );
};

export default Home;
