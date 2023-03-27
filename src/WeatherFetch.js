import { View, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import WeatherInfo from './WeatherInfo'

const API_KEY = '805c4a77f0810a55f4a098a426db6e07'

const WeatherFetch = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    //add a function to fetch the weather data
    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
            if (response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            }
        } catch(error) {
            Alert.alert('Error', error.message)
        }
        setLoaded(true);
    }

    //remember my city
    useEffect(() => {
        fetchWeatherData('Barcelona');
    }, []);

    //if the weather is not loaded, show a loading message
    if (!loaded) {
        return (
            <View>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    } else if (weatherData === null) {
        return (
            <View className="flex item-center justify-center flex-1">
                <Text className="text-3xl text-bold">Oups! Your city has not been found</Text>
            </View>
        );
    }
    return (
        <View>
            <WeatherInfo weatherData={weatherData} fetchWeatherData={ fetchWeatherData }/>
        </View>
    )
}

export default WeatherFetch