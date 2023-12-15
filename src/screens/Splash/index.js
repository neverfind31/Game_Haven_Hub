import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, ImageBackground, Linking } from 'react-native'
import Images from '../../assets/images'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthLoading } from '../../store/action/auth'

const Index = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

    const checkUserLoggedIn = async () => {
        setTimeout(async () => {
            dispatch(setAuthLoading(false))
        }, 2000);
    }

    return (
        <ImageBackground source={Images.splash} resizeMode={'cover'} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
    )
}

export default Index;