import React, {
  Dispatch, RefObject, SetStateAction, useCallback
} from 'react';
import {
  ScrollView, Text, TouchableOpacity, View, TextInput
} from 'react-native';
import { uniqueId } from 'lodash';

import { styles } from './styles';


export type TAutocomplete = {
    history: string[],
    onSubmit: (value: string) => void,
    onChangeText: Dispatch<SetStateAction<string>>,
    inputRef: RefObject<TextInput>
}

const Autocomplete: React.FC<TAutocomplete> = ({ history, onSubmit, inputRef, onChangeText }) => {

  const handleCitySelection = useCallback(
    (value: string) => (): void => {
      onSubmit(value);
      onChangeText(value);
      inputRef?.current?.blur();
    }, [onSubmit, inputRef, onChangeText]);

  return (
    <View style={ styles.historyContainer }>
      <Text style={ styles.historyTitle }>Recent searches</Text>
      <ScrollView>
        {
          history.map((city) => (
            <TouchableOpacity
              key={ uniqueId('id_') }
              onPress={ handleCitySelection(city) }
            >
              <Text style={ styles.historyOption }>
                {city}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
};

export default React.memo(Autocomplete);
