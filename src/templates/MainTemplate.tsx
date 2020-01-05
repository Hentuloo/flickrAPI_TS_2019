import React from "react";
import "./MainTemplate.scss";

import Navigation from "components/Navigation";
import Header from "components/Header";

export interface MainTemplateProps {
  title: string;
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ title, children }) => {
  return (
    <div className="mainTemplate">
      <Header className="mainTemplate__header" title={title} />
      <Navigation className="mainTemplate__navigation" />
      <main className="mainTemplate__content">{children}</main>
    </div>
  );
};

export default MainTemplate;
