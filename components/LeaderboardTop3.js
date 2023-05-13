import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const top3 = require('../assets/top3Example.png')

const LeaderboardTop3 = () => {
  return (
    <View>
      <Image source={top3} style={styles.top3Preview}/>
    </View>
  )
}

export default LeaderboardTop3

const styles = StyleSheet.create({
    top3Preview: {
        width: 235,
        height: 185
    }
})