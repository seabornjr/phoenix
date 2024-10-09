import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const LeaderboardOptions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.optionButton, styles.everyoneButton]}
            onPress={console.log('slected Everyone')}>
        <Text style={styles.buttonText}>Everyone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.optionButton, styles.friendsButton]}
            onPress={ () => {
                console.log('slected Friends')
                navigation.navigate("FriendsLeaderboardScreen")}
            }>
        <Text style={styles.buttonText}>Friends</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LeaderboardOptions

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    optionButton: {
        width: "50%",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5,
        margin: 5,
    },  
    everyoneButton: {
        backgroundColor: "#FFE2E0"
    },
    buttonText: {
        fontSize: 16
    } 
})