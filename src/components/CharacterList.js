import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data)
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
