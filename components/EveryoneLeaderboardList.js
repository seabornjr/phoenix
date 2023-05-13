import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EveryoneLeaderboardList = () => {
    const leaders = [
        {
            leaderName: 'You',
            points: 1800,
            image: require('../assets/userAvatar1.png')
        },
        {
            leaderName: 'Steve',
            points: 1600,
            image: require('../assets/userAvatar2.png')
        },
        {
            leaderName: 'Jordan',
            points: 1400,
            image: require('../assets/userAvatar3.png')
        },
        {
            leaderName: 'Emily',
            points: 1200,
            image: require('../assets/userAvatar4.png')
        }
    ]
    


  return (
    <View style={styles.container}>
      {leaders.map(leader => {
        return (
        <View style={styles.cardDiv} key={leader.leaderName}>
            <Image style={styles.avatar} source={leader.image} />
            <Text style={styles.leaderText}>{leader.leaderName}</Text>
            <Text style={styles.leaderPoints}>{leader.points}</Text>
        </View>
        )
      })
      
      }
    </View>
  )
}

export default EveryoneLeaderboardList

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#C7A09D',
        width: "100%"
    },
    cardDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: "#C7A09D"
    },
    avatar:{
        paddingRight: 5
    },
    leaderText: {
        marginLeft: 5,
        fontSize: 18
    },
    leaderPoints: {
        marginLeft: 250,
        fontSize:18
    }
})