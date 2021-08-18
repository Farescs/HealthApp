import React from 'react';
import { FC } from "react";
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';
import styles from './styles';
import MenuImage from '../MenuImage/MenuImage';
import DrawerActions from '@react-navigation/core';
import { Button } from '../../component';

const { width, height } = Dimensions.get('screen');

const App: FC = (props) => {

  const navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage onPress={() => DrawerActions.DrawerActions.openDrawer} />
  });

  return (
    <View>
        <Button title="Setup an appointment" onPress={() => navigator}></Button>
    </View>
  );
}
export default App;