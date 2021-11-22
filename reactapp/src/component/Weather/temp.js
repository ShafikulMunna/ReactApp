import React, {useState, useEffect} from 'react'
import "./style.css";
import WeatherCard from './weathercard';
const Temp = () => {
    const [searchData, setSearchData] = useState("dhaka");
    const [Temp, setTemp] = useState({});

    const getWeatherInfo = async()=>
    {
        try
        {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=b91105469103ddd22bc01756c7601206`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            const {temp, humidity, pressure} = data.main;
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const {main: weathermood} = data.weather[0];

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTemp(myNewWeatherInfo);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>{
        getWeatherInfo();
    });
    return (
        <>
           <div className = "wrap">
               <div className = "search">
                   <input type = "search" autoFocus id = "search" className = "searchTerm" value = {searchData} onChange = {(e)=>setSearchData(e.target.value)}></input>
                   <button className = "searchButton" type = "button" onClick = {()=>getWeatherInfo()}>Search</button>
               </div>
            </div> 

            
        < WeatherCard Temp = {Temp} />
        </>
    )
}

export default Temp
