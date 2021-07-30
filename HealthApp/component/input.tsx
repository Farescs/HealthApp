import React from "react";
import { FC } from "react";
import { Dimensions } from "react-native";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('screen');

interface Props {
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.3,
        height: height / 17,
        backgroundColor: "#e4e4e4",
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    input: {
        padding: 20
    }
})