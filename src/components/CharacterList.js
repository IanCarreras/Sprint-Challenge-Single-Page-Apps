import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        return setCharacterList(res.data.results)
      })
      .catch(err => {
        return err.response
      })
  }, []);

  return (
    <section>
      {
        characterList.map(character => {
          const { id, image, name, status, location, origin } = character
          return <CharacterCard
                    key={id}
                    image={image}
                    name={name}
                    status={status}
                    location={location.name}
                    origin={origin.name} />
        })
      }
    </section>
  );
}
