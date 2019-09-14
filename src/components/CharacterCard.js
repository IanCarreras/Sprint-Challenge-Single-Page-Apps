import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid grey;
`

export default function CharacterCard(props) {
  const { name, image, location, origin, status } = props
  return (
    <Card>
      <img src={image} alt={`pic of ${name}`} />
      <p>{status}</p>
      <p>Location: {location}</p>
      <p>Origin: {origin}</p>
    </Card>
  ) 
}
