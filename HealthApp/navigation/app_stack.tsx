import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../pages"

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home_page" component={HomePage}></Screen>
        </Navigator>
    )
}

export default AppStack;