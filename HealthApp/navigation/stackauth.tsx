import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUp, Login } from "../pages"

const { Navigator, Screen } = createStackNavigator();

const StackAuth: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signup" component={SignUp}></Screen>
            <Screen name="login" component={Login}></Screen>
        </Navigator>
    )
}

export default StackAuth;