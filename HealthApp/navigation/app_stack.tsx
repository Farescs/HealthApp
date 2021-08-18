import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
//import {HomePage, ListPage} from "../pages"<Screen name="Find hospital" component={ListPage}></Screen>
import MainMenu from "../pages/MainMenu/MainMenu"

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="main menu" component={MainMenu}></Screen>
           
        </Navigator>
    )
}

export default AppStack;
