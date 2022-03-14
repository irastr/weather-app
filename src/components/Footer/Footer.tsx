import React from 'react';
import { Text, View } from 'react-native';

import { icons } from '../../styles/icons';

import { styles } from './styles';


const Footer: React.FC = () => {

  return (
    <View style={ styles.bottomBar }>
      <View style={ styles.bottomDecoration } />
      <View style={ styles.homeIconContainer }>
        <Text style={ styles.homeIcon }>
          {String.fromCodePoint(icons.home)}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Footer);
