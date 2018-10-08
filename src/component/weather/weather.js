import React, { Component } from 'react';
import axios from 'axios';
import './weather.css';

class Weather extends Component{
    constructor(){
        super();
        this.state = {
            weather: [],
            weatherInput: '',
        }
    }

weatherLol = (zipp) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipp}&units=imperial&appid=e7ade7b19cb20fd92e3ff62699607c60`).then(res => {
        this.setState({
            weather: [ {name: res.data.name, temp: res.data.main.temp, icon: res.data.weather[0].icon} ]
        })
    })
    }

handleWeather = (e) => {
    this.setState({
        weatherInput: e.target.value
    })
}
    render(){
        return(
            <div className='weath-back'>
                <div className='border'>
                <div className='weathh'>
                    <h1>Weather: </h1> <br/>
                    <input placeholder='Enter Zip Code' onChange={this.handleWeather}/>
                    <button onClick={() => this.weatherLol(parseInt(this.state.weatherInput))}>GET WEATHER</button>
                    <br /><br />
                </div>
                {this.state.weather.map(weath => {
                    return (
                    <div>
                        <h4>{weath.name}</h4>
                        <p>{Math.floor(weath.temp)}<span>&#8457;</span></p>
                        {/* <img src={weath.icon}/> */}
                    </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Weather;