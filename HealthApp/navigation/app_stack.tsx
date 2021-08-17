import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {HomePage, ListPage} from "../pages"

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Find hospital" component={ListPage}></Screen>
        </Navigator>
    )
}

export default AppStack;
