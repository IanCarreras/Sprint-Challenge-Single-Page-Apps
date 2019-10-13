import React, { useEffect, useState } from "react";
import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locationList, setLocationList] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
          .then(res => {
            return setLocationList(res.data.results)
          })
          .catch(err => {
            return err.response
          })
      }, []);

    return (
        <section>
            {
                locationList.map(location => {
                    const { id, name, type, dimension, residents } = location
                    return <LocationCard 
                            key={id}
                            name={name}
                            type={type}
                            dimension={dimension}
                            residents={residents} />
                })
            }
        </section>
    )
}
