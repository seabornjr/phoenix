import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LeaderboardOptions from '../components/LeaderboardOptions'
import UserMenu from '../components/UserMenu'
import LeaderboardTop3 from '../components/LeaderboardTop3'
import EveryoneLeaderboardList from '../components/EveryoneLeaderboardList'

const LeaderboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LeaderboardOptions navigation={navigation}/>
        <LeaderboardTop3 />
        <EveryoneLeaderboardList />
        <UserMenu navigation={navigation} />
      
    </View>
  )
}

export default LeaderboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})