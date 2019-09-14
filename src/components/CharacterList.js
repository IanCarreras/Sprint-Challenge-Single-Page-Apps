import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [info, setInfo] = useState()
  const [characterList, setCharacterList] = useState([])
  const [change, setChange] = useState()
  const [next, setNext] = useState()
  const [previous, setPrevious] = useState()

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setInfo(res.data.info)
        setNext(res.data.info.next)
        setPrevious(res.data.info.prev)
        return setCharacterList(res.data.results)
      })
      .catch(err => {
        return err.response
      })
  }, []);

  useEffect(() => {
    axios.get(change)
      .then(res => {
        setInfo(res.data.info)
        setNext(res.data.info.next)
        setPrevious(res.data.info.prev)
        return setCharacterList(res.data.results)
      })
      .catch(err => {
        return err.response
      })
  }, [change])

  const handleChange = (e) => {
    return setChange(info[e.target.name])
  }
  
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
      <div>
        {/* {previous && previous.includes('https') && <button name='previous' onClick={(e) => handleChange(e)}>Previous</button> }
        {next && next.includes('https') && <button name='next' onClick={(e) => handleChange(e)}>Next</button> } */}
        {<button disabled={!(previous && previous.includes('https'))} name='prev' onClick={(e) => handleChange(e)}>Previous</button>}
        {<button disabled={!(next && next.includes('https'))} name='next' onClick={(e) => handleChange(e)}>Next</button>}
      </div>
    </section>
  );
}