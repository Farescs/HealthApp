import React, { FC, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import firebase from 'firebase'
import { useState } from 'react'
import AppStack from './app_stack'
import StackAuth from './stackauth'

const MainMenu: FC = () => {
    const [user, createUser] = useState<any>(null);
    /**Detect whether user is logged in or not */
    const check_logged = () => {
        firebase.auth().onAuthStateChanged(_user_ => {
            if (_user_) {
                createUser(_user_)
            }
        })
    }

    useEffect(() => {
        check_logged()
    }, [])

    return (
        <NavigationContainer>
            <AppStack/>
            {//user != null ? <AppStack /> : <StackAuth />}
            }
        </NavigationContainer>
    )
}

export default MainMenu;
