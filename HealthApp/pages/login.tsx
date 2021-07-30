import React from "react";
import { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, Alert, Image, Dimensions } from "react-native";
import { Button, Input } from "../component";
import firebase from "firebase";

const { width, height } = Dimensions.get('screen');

const App: FC = (props) => {
    const [email, newEmail] = useState<string | null>(null);
    const [password, newPassword] = useState<string | null>(null);

    const login = async () => {
        if (email && password) {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        else {
            Alert.alert("Fields are missing!")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.LogoImage} source={require("../Images/HealthApp.png")} />
            <Input placeholder="Email" onChangeText={(text) => newEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => newPassword(text)} />
            <Button title="Login" onPress={login} />


            <View style={styles.loginText}>
                <Text style={styles.AlreadyText}>
                    Don't Have an Account with us?
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('signup')} style={styles.AlreadyText}><Text style={styles.LoginColor}>SignUp Here</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, loginText: {
        marginVertical: 25,
        flexDirection: 'row'
    },
    AlreadyText: {
        marginHorizontal: 5
    },
    LoginColor: {
        color: "#a8a7f4"
    },
    LogoImage: {
        marginBottom: 20,
        height: height * 0.1,
        width: width * 0.2,
    }
})