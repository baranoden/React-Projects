import {useContext} from 'react'
import weatherContext from '../../context/WeatherContext'
import styles from "./days.module.css"

function Days() {
  const {weatherData} = useContext(weatherContext)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    return (
        <div className={styles.container}>
            {weatherData.map((day, i)=>(
                <div className={styles.flex} key={i}>
                    <div>
                    <p className={styles.dayName}>{days[new Date(day.dt*1000).getDay()]}</p>
                    <img className={styles.dayImg}
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt="deneme"/>
                    </div>
                    <div className={styles.dayTemp}>
                        <p>{Math.round(day.temp.max)}&#176;</p>
                        <p>{Math.round(day.temp.min)}&#176;</p>
                        </div>
                </div>
            ))}
        </div>
    
    )}

export default Days
