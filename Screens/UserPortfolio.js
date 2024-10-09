import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VolunteeringWidget from '../components/VolunteeringWidget'
import PortfolioOptions from '../components/PortfolioOptions'
import UserMenu from '../components/UserMenu'

const UserPortfolio = ({navigation}) => {
  return (
    <View style={styles.container}>
        <VolunteeringWidget />
        <PortfolioOptions />
        <UserMenu navigation={navigation}/>
     
    </View>
  )
}

export default UserPortfolio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})