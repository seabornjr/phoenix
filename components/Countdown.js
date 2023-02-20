import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Countdown = () => {

    const [currentCount, setcurrentCount] = useState(5)
    
    const ticker = () => {
      if (currentCount > 0) {
        setcurrentCount(currentCount - 1)
      } 
    }

    function makeItCount() {
      while (currentCount > 0) {
        setInterval(ticker,1000);
      }
    }
    //makeItCount();


  return (
    <View style={styles.countdownDiv}>
      <Text style={styles.countdownSyle}>{currentCount}</Text>
    </View>
  )
}

export default Countdown

const styles = StyleSheet.create({
  countdownDiv: {
    marginTop: 25,
  },
  countdownSyle: {
    fontWeight: 'bold',
    fontSize: 25
  }
})