import {useContext} from 'react'
import weatherContext from '../../context/WeatherContext'
import styles from "./select.module.css"
function Select() {
    const {cities, selectedCity, setSelectedCity} = useContext(weatherContext)
   
   const handleChangeCity = (e) => {
    for(let i  = 0; i < cities.length; i++){
        if(e.target.value === cities[i].name){
            setSelectedCity(cities[i])
        }
    }
   }
   
   
    return (
        <div >
            <select className={styles.selector} value={selectedCity.name} onChange={handleChangeCity}> 
                {cities.map((city, i) =>(
                    <option key={i} value={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
