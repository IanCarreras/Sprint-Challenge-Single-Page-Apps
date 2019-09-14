import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid black;
  border-radius: .5rem;
  padding: 1rem 0 0 1rem;
  margin: 1rem .5rem;
  width: 40%;
`

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <h2>{name}</h2>
      <h4>{type} - {dimension}</h4>
      <div className='residents'>{residents.length} residents</div>
    </Card>
  )
}