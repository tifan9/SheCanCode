import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URL= 'https://restcountries.com/v3.1/all'
const Countries = () => {

    const [countries, setCountries] = useState([])

    const fetchCountry = async () => {
        const res = await fetch(URL)
        const countries = await res.json()
        setCountries(countries)
        console.log(countries);
    }
    useEffect(() =>{
        fetchCountry();
    }, [])

  return (
    <>
      <section className="grid">
        {countries.map((country) => (
            
          <article key={country.cca3}>
            <img src={country.flags.png} alt={country.name}/>
            <div className="details">
            <h3>{country.name.common}</h3>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <Link to ={`/countries/${country.name}`}>More</Link>
            </div>
            
          </article>
        ))}
      </section>
     
    </>
  )
}

export default Countries
