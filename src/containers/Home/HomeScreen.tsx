import React, { useState, useCallback } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';

import getWeatherForecast, { WeatherForecast } from '../../services/forecast';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { formatString } from '../../utils/helpers';

import { styles } from './styles';
import ContentSection from './ContentSection';


const HomeScreen: React.FC = () => {

  const [text, onChangeText] = useState<string>('');
  const [response, setResponse] = useState<WeatherForecast | void>(undefined);
  const [history, saveHistory] = useState<string[]>([]);
  const [isHistoryVisible, setHistoryVisibility] = useState<boolean>(false);


  const updateSearchHistory = useCallback((response: WeatherForecast): void => {
    const { location } = response;
    const updatedHistoryArray = history.filter((city) => formatString(city) !== formatString(location));
    saveHistory([location, ...updatedHistoryArray]);
  }, [history]);


  const onSubmit = useCallback(async (value): Promise<void> => {
    const response = await getWeatherForecast(value);
    setResponse(response);

    if (response) {
      setHistoryVisibility(false);
      updateSearchHistory(response);
    }
  }, [updateSearchHistory]);


  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView
        style={ styles.contentContainer }
        scrollEnabled={ false }
      >
        <Input
          value={ text }
          onChangeText={ onChangeText }
          history={ history }
          isHistoryVisible={ isHistoryVisible }
          setHistoryVisibility={ setHistoryVisibility }
          onSubmit={ onSubmit }
        />
        {
          response ? (
            <ContentSection response={ response } />
          ) : (
            <Text style={ styles.description }>Nothing found :(</Text>
          )
        }
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};


export default React.memo(HomeScreen);
