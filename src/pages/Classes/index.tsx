import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ProjectsPresentation from "../../components/ProjectsPresentation/ProjectsPresentation";

export default function Contact() {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === "/classes") {
    return (
      <div>
        <Header></Header>
        <ProjectsPresentation>
          <ProjectCards />
        </ProjectsPresentation>
      </div>
    );
  } else {
    //pra ajudar na depuração
    return (
      <div>
        <Header></Header>
        <p>route actual: {pathname}</p>
        <div>your code is wrong</div>
      </div>
    );
  }
}
