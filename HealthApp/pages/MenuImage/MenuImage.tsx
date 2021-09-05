import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { FC } from "react";
import styles from './styles'
import DrawerActions from '@react-navigation/core';

const App: FC = (props) => {

  return (
    <TouchableOpacity style={styles.headerButtonContainer} onPress = {() => DrawerActions.DrawerActions.openDrawer}>
      <Image
        style={styles.headerButtonImage}
        source={require("../Images/menu.png")}
      />
    </TouchableOpacity>
  );
}

export default App;