import React, {
  useCallback, useRef, Dispatch, SetStateAction
} from 'react';
import {
  Text, View, TextInput, TouchableOpacity
} from 'react-native';
import { debounce } from 'lodash';

import { icons } from '../../styles/icons';

import Autocomplete from './Autocomplete/Autocomplete';
import { styles } from './styles';


export type TInput = {
    value: string,
    onChangeText: Dispatch<SetStateAction<string>>,
    history: string[],
    setHistoryVisibility: (value: boolean) => void,
    isHistoryVisible: boolean,
    onSubmit: (value: string) => void,
}

const Input: React.FC<TInput> = ({
  value,
  onChangeText,
  history,
  setHistoryVisibility,
  isHistoryVisible,
  onSubmit,
}) => {
  const inputRef = useRef<TextInput>(null);

  const handleOnSubmit = useCallback(
    (value: string) => (): void => onSubmit(value),
    [onSubmit]);

  const handleUpdateHistoryVisibility = useCallback(
    (value: boolean) => (): void => setHistoryVisibility(value),
    [setHistoryVisibility]);

  const handleSearchIconPress = useCallback(
    (value: string) => (): void => {
      onSubmit(value);
      inputRef?.current?.blur();
    }, [onSubmit]);

  return (
    <View style={ styles.inputContainer }>
      <View style={ styles.bottomDecoration } />
      <TextInput
        style={ styles.searchInput }
        onChangeText={ onChangeText }
        value={ value }
        onSubmitEditing={ handleOnSubmit(value) }
        onFocus={ handleUpdateHistoryVisibility(true) }
        onBlur={ handleUpdateHistoryVisibility(false) }
        ref={ inputRef }
        autoCorrect={ false }
      />
      <TouchableOpacity
        style={ styles.searchIconTouchable }
        onPress={ debounce(handleSearchIconPress(value), 1000) }
      >
        <Text style={ styles.searchIcon }>
          {String.fromCodePoint(icons.search)}
        </Text>
      </TouchableOpacity>
      {
        Boolean(history.length && isHistoryVisible) && (
          <Autocomplete
            history={ history }
            onSubmit={ onSubmit }
            onChangeText={ onChangeText }
            inputRef={ inputRef }
          />
        )
      }
    </View>
  );
};

export default React.memo(Input);
