import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    fetchWeatherData(cityName);
  };

  return (
    <View className="flex flex-wrap flex-row place-items-center items-center justify-center">
      <TextInput
        className="px-4 w-3/4 py-2 bg-white border rounded-full focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder='Search City'
        value={cityName}
        onChangeText={ (text) => setCityName(text) }
        onSubmitEditing={ handleSearch }
      />
      <EvilIcons
        className="text-white rounded-full"
        name="search" size={28} color="black"
        onPress={ handleSearch } 
      />
    </View>
  )
}


export default WeatherSearch