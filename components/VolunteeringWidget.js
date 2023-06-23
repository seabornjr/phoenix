import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import VolunteerFormModal from './VolunteerFormModal'

const VolunteeringWidget = () => {
    const addVoluntterButton = require("../assets/addVolunteerButton.png")
  return (
    <View style={styles.container}>
        <Text style={styles.volunteerHeader}>Volunteering</Text>
        <VolunteerFormModal />
        <Text style={styles.caption}>add hours</Text>
    </View>
  )
}

export default VolunteeringWidget

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    volunteerHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 10
    },
    caption: {
        paddingTop: 10,
    }
})