import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Countdown = () => {

  const [count, setCount] = useState(5);

  useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      if (count === 0) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    
  }, [count]);


  return (
    <View style={styles.countdownDiv}>
      <Text style={styles.countdownSyle}>{count}</Text>
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