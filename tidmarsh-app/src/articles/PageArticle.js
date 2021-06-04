import React from "react";
import { Image, Container } from "semantic-ui-react";

const PageArticle = ({ children }) => {
  return (
    <Container>
      <div>
        <h1 className="titre5">
          <Image src="../images/logo.svg" fluid />
        </h1>
        {children}
      </div>
    </Container>
  );
};

export default PageArticle;
