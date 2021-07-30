import React from "react";
import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { Dimensions, Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;
}

const App: FC<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default App;

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#000",
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 25,
    },
    text: {
        color: '#fff'
    }
})