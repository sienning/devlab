import React from "react";
import { Image, Container } from "semantic-ui-react";
import Chargement from "../components/Chargement";
import HeaderDaily from "../components/HeaderDaily";
import { useHumidity, usePressure, useTemperature } from "./articles.service";

const PageArticle = ({ children }) => {
  const {
    data: temperature,
    isLoading: isLoadingTemperature,
  } = useTemperature();
  const { data: humidity, isLoading: isLoadingHumidity } = useHumidity();
  const { data: pressure, isLoading: isLoadingPressure } = usePressure();

  const isLoading =
    isLoadingTemperature || isLoadingHumidity || isLoadingPressure;

  return (
    <Container>
      {isLoading ? (
        <Chargement style={{ minHeight: "100%" }} text="Chargement de l'API" />
      ) : (
        <div>
          <h1 className="titre5">
            <Image src="./images/logo.svg" fluid />
          </h1>
          <HeaderDaily
            temperature={temperature}
            humidity={humidity}
            pressure={pressure}
          />
          {children}
        </div>
      )}
    </Container>
  );
};

export default PageArticle;
