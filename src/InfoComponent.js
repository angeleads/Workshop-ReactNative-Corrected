import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const InfoComponent = ({ information, value, iconName }) => {
  return (
    <View className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <View className="flex items-center">
        <Icon name={ iconName } size={ 28 } color="black" />
        <Text className="ml-2 text-2xl">{ information }</Text>
      </View>
      <Text className="mt-2 text-3xl text-center ">{ value }</Text>
    </View>
  )
}

export default InfoComponent