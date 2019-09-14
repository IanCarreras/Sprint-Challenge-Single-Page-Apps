import React, { useEffect, useState } from "react";
import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locationList, setLocationList] = useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get('https://rickandmortyapi.com/api/location/')
          .then(res => {
            return setLocationList(res.data.results)
          })
          .catch(err => {
            return err.response
          })
      }, []);

    console.log(locationList)

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
