import React, { useCallback, useState } from 'react'
import { DashIcon } from './DashIcon';
import axios from 'axios';

export const Weather = () => {

    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const [weather, setWeather] = useState([]);

    const getData = async (city, unit) => {
        const { data } = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                units: unit,
                appid: '16596fe956171a7376f2ba91213e3499'
            }
        })
        return data;
    }


    const handleRadio = useCallback((e) => {
        setUnit(e.target.value);
    }, [])

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await getData(city, unit);
            setWeather([
                ...weather,
                data
            ]);
            setCity('');
        }
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col">
                    <label htmlFor='city'>Add city</label>
                    <input name='city' onKeyPress={search} onChange={(e) => setCity(e.target.value)} type="text" value={city} className="form-control" placeholder="Type here" />
                </div>
                <div className="col">
                    <div className="form-check">
                        <input onChange={handleRadio} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="metric" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Celsius
                            </label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleRadio} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="imperial" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Fahrenheit
                            </label>
                    </div>
                    <div className="form-check disabled">
                        <input onChange={handleRadio} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="kelvin" />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            Kelvin
                            </label>
                    </div>
                </div>
            </div>
            <ul>
                {weather.map((weath, i) => (
                    <li key={i}><DashIcon />{weath.name} = {weath.main.temp}</li>
                ))}
            </ul>
        </div>
    )
}
