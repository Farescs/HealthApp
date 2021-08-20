import React from 'react';
import { FC } from "react";
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, Dimensions } from 'react-native';
import styles from './styles';
import MenuImage from '../MenuImage/MenuImage';
import DrawerActions from '@react-navigation/core';
import { Button } from '../../component';
import { Link } from '@react-navigation/native';

const App: FC = (props) => {

  const navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage onPress={() => DrawerActions.DrawerActions.openDrawer} />
  });

  return (
    <View style={styles.container}>
        <Button title="Make an appointment" onPress={() => <Link to={"../../pages/list_page.tsx"}>.</Link>}></Button>
    </View>
  );
}
export default App;