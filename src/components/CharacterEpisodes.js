import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import EpisodeCard from './EpisodeCard'

const Wrapper = styled.div`
    width: 80%;
    text-align: center;
`

export default function CharacterEpisodes(props) {
    const [episodeIds, setEpisodeIds] = useState()
    const [episodes, setEpisodes] = useState()
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(res => {
                setCharacter(res.data)
                let urls = res.data.episode.map(episode => Number(episode.slice(40)))
                return setEpisodeIds(urls)
            })
            .catch(err => {
                return err.response
            })
    }, [props.match.params.id])
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
            .then(res => {
                return (typeof res.data.length === 'number') ? setEpisodes(res.data) : setEpisodes([res.data])
            })
            .catch(err => {
                return err.response
            })
    }, [episodeIds])

    return (
        <section>
            {character && 
                <Wrapper>
                    <h1>{character.name}'s Episode List ({episodes && episodes.length})</h1>
                    <img src={character.image} alt={`pic of ${character.name}`}/>
                </Wrapper>
            }
            {episodes &&
                episodes.map(location => {
                    const { id, name, episode, air_date, characters } = location
                    return <EpisodeCard 
                            key={id}
                            name={name}
                            episode={episode}
                            air_date={air_date}
                            characters={characters} />
                })
            }
        </section>
    )
}