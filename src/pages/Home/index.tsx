import React from "react";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectsPresentation from "../../components/ProjectsPresentation/ProjectsPresentation";

const Home = (): JSX.Element => {
  return (
    <div>
      <ProjectsPresentation>
        <ProjectCards />
      </ProjectsPresentation>
    </div>
  );
};

export default Home;
