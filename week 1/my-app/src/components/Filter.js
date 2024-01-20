import React from 'react'

const Filter = () => {
  return (
    <>
    <section className="filter">
        <form className='form-control'>
            <input type="search" placeholder="Search a Country" id="search" />
        </form>

        <div className='region-filter'>
            <select className="select" id='select' name='select'>
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
