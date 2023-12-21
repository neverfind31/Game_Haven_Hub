import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Qestions from '../screens/Home'


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
            <StackNav.Screen name='Qestions' component={Qestions} />
        </StackNav.Navigator>
    )
}