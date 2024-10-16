import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries }) => {
    console.log(handleVisitedCountries)
    const { name, flags, population, area } = country;


    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && "visited"}`}>
            <h3 style={{ color: visited && "red", fontWeight: visited && 'bolder', fontSize: visited && "30px" }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <button onClick={()=>{handleVisitedCountries(country)}}>Mark Visited</button>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country" : "i want to visited"}
        </div>
    );
};

export default Country;