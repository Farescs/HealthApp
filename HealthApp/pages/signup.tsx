import firebase from "firebase";
import React from "react";
import { useState } from "react";
import { FC } from "react";
import { TouchableOpacity, Image, Dimensions } from "react-native";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button, Input } from "../component";

const { width, height } = Dimensions.get('screen');

const App: FC = (props) => {

    const [name, newName] = useState<string | null>(null);
    const [email, newEmail] = useState<string | null>(null);
    const [password, newPassword] = useState<string | null>(null);


    const SignUp = async () => {
        if (name && email && password) {
            try {
                const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
                if (user) {
                    /**Saving user data to database */
                    await firebase.firestore().collection('users').doc(user.uid).set({ name, email, password });
                }
            } catch (error) {
                console.log(error)
            }
        }
        else {
            Alert.alert("Error", "Fields are missing!");
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.LogoImage} source={require("../Images/HealthApp.png")} />
            <Input placeholder="Name" onChangeText={(text) => newName(text)} />
            <Input placeholder="Email" onChangeText={(text) => newEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => newPassword(text)} />
            <Button title="Sign Up" onPress={SignUp} />
            <View style={styles.loginText}>
                <Text style={styles.AlreadyText}>
                    Already Have an Account with Us?
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('login')} style={styles.AlreadyText}><Text style={styles.LoginColor}>Login Here</Text></TouchableOpacity>
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
    },
    loginText: {
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