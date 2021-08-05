import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import MenuImage from '../MenuImage/MenuImage';
import DrawerActions from '@react-navigation/core';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage 
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  constructor(props) {
    super(props);
  }

  onPressAppointment = item => {
    
  };

  makeAppointment = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressAppointment(item)}>
      <View>
        <Text>Setup an appointment</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        renderItem={this.makeAppointment}
      </View>
    );
  }
}