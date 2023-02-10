import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/gears1.png')} />
      <Text style={styles.message}>Get Ready!...</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: .75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        marginTop: 50
    }
})