import React from "react";
import styled from 'styled-components'

const Section = styled.section`
  border: 1px solid black;
`

export default function WelcomePage() {
  return (
    <Section>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Section>
  );
}
