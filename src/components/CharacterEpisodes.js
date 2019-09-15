import React, { useState, useEffect } from 'react'
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

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
    }, [])
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
            .then(res => {
                return setEpisodes(res.data)
            })
            .catch(err => {
                return err.response
            })
    }, [episodeIds])

    return (
        <section>
            {character && 
                <div>
                    <h1>{character.name}'s Episode List</h1>
                    <img src={character.image} alt={`pic of ${character.name}`}/>
                </div>
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