import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './auth'
import Splash from '../screens/Splash'
import { useSelector } from 'react-redux';


export default RootNavigator = () => {

    const authLoading = useSelector(state => state?.auth?.authLoading);

    return (
        <NavigationContainer>
            {
                authLoading
                    ?
                    <Splash />
                    : <AuthStack />
            }
        </NavigationContainer>
    )
}