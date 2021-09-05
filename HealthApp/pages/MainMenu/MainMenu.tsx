import { FC } from "react";
import { View } from 'react-native';
import styles from './styles';
import { Button } from '../../component';
import  ListPage from "../list_page";
import Sidebar from "../DrawerContainer/sidebar";
import moreSytles from '../DrawerContainer/styles'

const App: FC = (props) => {

  return (
    <View style={styles.container}>
      <div id="App">
      <Sidebar  />

      <div id="page_wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
      <Button title="Make an appointment" onPress={() => ListPage}></Button>
    </View>
  );
}

export default App;