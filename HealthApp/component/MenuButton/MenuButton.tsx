import React from 'react';
import { TouchableHighlight, Image, Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { FC } from "react";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get('screen');

interface Props {
  title: string;
  source: string;
  onPress: () => void;
}

const App: FC<Props> = (props) => {
    return (
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.btnClickContain}
        underlayColor="rgba(128, 128, 128, 0.1)"
      >
        <View style={styles.btnContainer}>
          <Image source={props.source} style={styles.btnIcon} />
          <Text style={styles.btnText}>{props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  
}

export default App;