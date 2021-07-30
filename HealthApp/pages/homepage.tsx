import React from "react";
import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../component"
import firebase from "firebase";

const App: FC = () => {

    const signOut = () => {
        firebase.auth().signOut();
    }
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})