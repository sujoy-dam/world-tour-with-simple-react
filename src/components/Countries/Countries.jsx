import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries]=useState([])
    const [visitedFlag, setVisitedFlag]=useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

        // console.log(countries)
    }, [])


    const handleVisitedCountries = (country)=>{
        console.log(country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = (flags)=>{
        const newVisitedFlag = [...visitedFlag, flags]
        setVisitedFlag(newVisitedFlag)

    }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h2>Visited Country:{visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.name.common}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flags-container">
                {
                    visitedFlag.map(flag=><img src={flag}></img>)
                }
            </div>
            <div className='countries'>
            {
                countries.map(country=><Country country={country} key={country.name.common} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;