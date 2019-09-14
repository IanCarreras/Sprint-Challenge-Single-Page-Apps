import React, { useEffect, useState } from "react";
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
    const [episodelist, setEpisodeList] = useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get('https://rickandmortyapi.com/api/episode/')
          .then(res => {
            return setEpisodeList(res.data.results)
          })
          .catch(err => {
            return err.response
          })
      }, []);

    return (
        <section>
            {
                episodelist.map(location => {
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
