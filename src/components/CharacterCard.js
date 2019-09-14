import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  margin: 1rem .5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid grey;
  padding: 1rem;
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
