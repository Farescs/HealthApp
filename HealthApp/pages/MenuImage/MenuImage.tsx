import React from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import { FC } from "react";
import PropTypes from 'prop-types';
import styles from './styles'
import DrawerActions from '@react-navigation/core';

const { width, height } = Dimensions.get('screen');

const App: FC = (props) => {

  return (
    <TouchableOpacity style={styles.headerButtonContainer} >
      <Image
        onPress={() => DrawerActions.DrawerActions.openDrawer}
        style={styles.headerButtonImage}
        source={require("../Images/menu.png")}
      />
    </TouchableOpacity>
  );
}

export default App;