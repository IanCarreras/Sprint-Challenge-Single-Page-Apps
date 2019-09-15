import React from "react";
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  margin: 1rem .5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 1px solid grey;
  border-radius: .5rem;
  padding: 1rem;
  width: 40%;
`

export default function CharacterCard(props) {
  const { id, name, image, location, origin, status, episodes } = props
  return (
    <Card>
      <img src={image} alt={`pic of ${name}`} />
      <h1>{name}</h1>
      <p>{status}</p>
      <p>Location: {location}</p>
      <p>Origin: {origin}</p>
      <NavLink to={`/episodes/${id}`}>Episodes {episodes && episodes.length}</NavLink>
    </Card>
  ) 
}
