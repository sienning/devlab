import React from "react";
import Chargement from "./Chargement";
import { Image } from "semantic-ui-react";

const Article2 = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Chargement />
      ) : (
        <div>
          <Image src="./images/fondHumidite.png" />
        </div>
      )}
    </div>
  );
};

export default Article2;
