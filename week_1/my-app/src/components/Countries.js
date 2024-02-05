import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';
import Filter from './Filter'
import {apiURL} from "../utils/api"

const Countries = () => {

    const [countries, setCountries] = useState([])
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage] = useState(8);

    const fetchCountry = async () => {
        try {
          const res = await fetch(`${apiURL}/all`)
          if(!res.ok) throw new Error('Error fetching country')
          const countries = await res.json()
          setCountries(countries)
          
          console.log(countries);
        } catch (error) {
        }
    }
    useEffect(() =>{
        fetchCountry();
    }, [])

    // get Country name 
    const getCountryByName = async(countryName)=>{
      try {
        const res = await fetch (`${apiURL}/name/${countryName}`)
      if(!res.ok) throw new Error('Country not Found')
      const data = await res.json()
      setCountries(data)
      } catch (error) {
      }
    }

    // filter country

    const getCountryByRegion = async(regionName) =>{
      try {
        const res = await fetch (`${apiURL}/region/${regionName}`)
        if(!res.ok) throw new Error('Region not Found')
        const data = await res.json()
        setCountries(data)
      } catch (error) {
        
      }
    }

  return (
    <>
    <div className='search'>
          <Filter onSearch={getCountryByName} onSelect={getCountryByRegion}/>
        </div>
      <section className="grid">
        {countries.map((country) => (
            
          <article key={country.cca3}>
            <img src={country.flags.png} alt={country.name}/>
            <div className="details">
            <h3 className='country-name'>{country.name.common}</h3>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            {/* <div className='button'>
            <button type='submit' className='btn'>
            <Link to ={`/countries/${country.name}`}>More</Link>
            </button>
            </div> */}  
            </div>
            
          </article>
        ))}
        {/* <div className='pagination-container'>
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div> */}
      </section>
      
    </>
  )
}

export default Countries
