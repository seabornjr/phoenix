import React from 'react'
import { StyleSheet, View } from 'react-native'
import EveryoneLeaderboardList from '../components/EveryoneLeaderboardList'
import LeaderboardOptions from '../components/LeaderboardOptions'
import LeaderboardTop3 from '../components/LeaderboardTop3'
import UserMenu from '../components/UserMenu'

const FriendsLeaderboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LeaderboardOptions navigation={navigation}/>
        <LeaderboardTop3 />
        <EveryoneLeaderboardList />
        <UserMenu navigation={navigation} />
    </View>
  )
}

export default FriendsLeaderboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})