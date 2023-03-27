import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import WeatherSearch from './WeatherSearch';
import InfoComponent from './InfoComponent';

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {
  const { 
      name,
      weather: [{description}],
      main: {temp, humidity, pressure, feels_like, temp_min, temp_max},
      wind: {speed},
      sys: { sunrise, sunset }
  } = weatherData;

  const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`;
  }

  const getRoundedValue = (temp) => {
    return Math.floor(temp);
  }

  return (
    <SafeAreaView>
      <WeatherSearch fetchWeatherData={fetchWeatherData}/>
      <View className="flex justify-center items-center">
        <View>
          <Text className="py-10 text-5xl">{name}</Text>
        </View>
        <Text className="py-2 px-2 text-7xl">{getRoundedValue(temp)} °</Text>
        <View>
          <Text className="text-2xl">{description}</Text>
        </View>
        <View className="flex flex-wrap flex-row place-items-center">
          <Text className="text-2xl"> H: {getRoundedValue(temp_max)} °</Text>
          <Text className="text-2xl pb-6 "> L: {getRoundedValue(temp_min)} °</Text>
        </View>
      </View>
      <View className="flex flex-row flex-wrap justify-center ">
      <InfoComponent information="Feels like" value={`${getRoundedValue(feels_like)} °`} iconName="thermometer-outline" />
        <InfoComponent information="Humidy" value={`${humidity} %`} iconName="water-outline"/>
        <InfoComponent information="Pressure" value={`${pressure}`} iconName="cloud-circle-outline"/>
        <InfoComponent information="Wind Speed" value={`${speed} mph`} iconName="speedometer-outline"/>
        <InfoComponent information="Sunrise" value={getFormattedTime(sunrise)} iconName="sunny-outline" />
        <InfoComponent information="Sunset" value={getFormattedTime(sunset)} iconName="moon-outline" />            
      </View>
    </SafeAreaView>
  )
}

export default WeatherInfo