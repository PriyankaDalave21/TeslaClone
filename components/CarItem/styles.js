import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles= StyleSheet.create({
    carcontainer: {
        width: '100%',
        height: '100%'
      },
      titles: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold'
      },
      subtitle: {
        fontSize: 16,
        color: 'gray',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        position: 'absolute'
      }
})

export default styles;