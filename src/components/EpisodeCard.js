import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid black;
  border-radius: .5rem;
  padding: 1rem 0 0 1rem;
  margin: 1rem .5rem;
  width: 40%;
`

export default function EpisodeCard({ name, episode, air_date, characters }) {
  return (
    <Card>
        <h2>{name}</h2>
        <p>Episode: {episode}</p>
        <p>Aired: {air_date}</p>
        <p className='characters'>{characters.length} characters</p>
    </Card>
  )
}