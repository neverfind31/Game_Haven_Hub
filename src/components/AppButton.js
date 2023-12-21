import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const AppButton = ({disabled, onPress, text}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={{
                borderRadius: 5,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
        >
            <LinearGradient
                colors={['#1B4F72', '#2874A6']}
                style={{
                    padding:10,
                    paddingHorizontal:30,
                    borderRadius: 5,
                    backgroundColor: '#e71616',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '600' }}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({})