import React from 'react'
import { Cards } from './Cards';

const FetchMovie = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTA0MzhmMTI0NzFhMTFmYTRiN2FlODJkOGI3ZmFkYSIsInN1YiI6IjY1ZDg2YmVlY2FhNTA4MDE4YTM0MTMyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KvD6BdCNfQnnwEltF9Q3sWfOGetlVfKBf5Pwoxa5hrU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/authentication', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        const [movie, setMovie] = useState([])
  return (
    <>
        <FlatList
        showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={movie}
            renderItem={movie => {
                const {item} = movie
                return(
                    <Cards image={item.poster_path}/>
                )
            }}
            keyExtractor={item => {return item.id}}
            contentContainerStyle={{ paddingHorizontal: 15}}
        />
    </>
  )
}

export  {FetchMovie}
