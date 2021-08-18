import React from 'react';
import { View, Dimensions } from 'react-native';
import { FC } from "react";
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../component/MenuButton/MenuButton';
import { DrawerActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const App: FC = (props) => {
    const navigation = props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton 
            title="HOME"
            source={require("../../images/home.png")}
            onPress={() => {
              navigation.navigate('Home');
              DrawerActions.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  
}

export default App;
