import React, { useState } from 'react'

const Filter = ({onSearch, onSelect}) => {

    const [searchInput, setSearchInput] = useState('')
    
    const submitHandler = (e) => {
    e.preventDefault()
    onSearch(searchInput)
  }

  // Filter
  const selectHandler = (e) =>{
    const regionName = e.target.value
    onSelect(regionName)
  }
  return (
    <>
    <section className="filter">
        <form className='form-control' onSubmit={submitHandler}>
            <input type="search" 
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)} 
            placeholder="Search a Country" 
            id="search" />
        </form>

        <div className='region-filter'>
            <select 
            className="select" 
            id='select' 
            name='select'
            onChange={selectHandler}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Ocenia">Ocenia</option>
            </select>
        </div>
    </section>
    </>
  )
}

export default Filter
