/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Container, Card, ContentCard } from "./styles";
import { Header } from "../Header/Header";

export const Content = props => {
  return (
    <Container>
      <Header />
      <ContentCard>
        <Card> Soy el card </Card>
      </ContentCard>
    </Container>
  );
};
