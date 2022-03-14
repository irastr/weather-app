import React from 'react';
import { Text, Image } from 'react-native';


import { WeatherForecast } from '../../services/forecast';

import { styles } from './styles';


export interface TContentSection {
    response: WeatherForecast,
}

const ContentSection: React.FC<TContentSection> = ({ response }) => {
  return (
    <>
      <Image
        style={ styles.image }
        source={{
          uri: `http://openweathermap.org/img/wn/${response?.icon}@4x.png`,
        }}
      />

      <Text style={ styles.description }>
        {response.description}
      </Text>

      <Text style={ styles.description }>
        {response.location}
      </Text>
      <Text style={ styles.temp }>
        {`${response.temp}°`}
      </Text>
      <Text style={ styles.range }>
        {`Min:${response.minTemp}° / Max:${response.maxTemp}° `}
      </Text>
    </>
  );
};


export default React.memo(ContentSection);
