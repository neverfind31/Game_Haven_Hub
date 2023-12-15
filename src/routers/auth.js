import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'


const StackNav = createNativeStackNavigator()

export default AuthStack = () => {

    return (
        <StackNav.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
                gestureEnabled : false
            }}
        >
            <StackNav.Screen name='Login' component={Login} />
        </StackNav.Navigator>
    )
}