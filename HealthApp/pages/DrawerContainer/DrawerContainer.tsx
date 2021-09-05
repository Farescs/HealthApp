import React from 'react';
import { View } from 'react-native';
import { FC } from "react";
import styles from './styles';
import MenuButton from '../../component/MenuButton/MenuButton';
import { DrawerActions } from '@react-navigation/native';

const App: FC = (props) => {
    const navigation = props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton 
            title="HOME"
            source={require("../../images/home.png")}
            onPress={() => {
              props.navigation.navigate('MainMenu');
              DrawerActions.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  
}

export default App;
