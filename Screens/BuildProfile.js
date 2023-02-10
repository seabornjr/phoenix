import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CityStateSelector2 from '../components/CityStateSelector2'
import DateSelector from '../components/DateSelector'
import GenderDropdown from '../components/GenderDropdown'
import NameField from '../components/NameField'


const BuildProfile = ({navigation}) => {
    
const [avatar, setAvatar] = useState(require('../assets/DefaultAvatar.png'));

  return (
    <KeyboardAvoidingView
         style={styles.container}
        behavior="padding"
    >   
        <Text style={styles.heading}> Build Your Profile </Text>
        <View style={styles.imageContainer}>
            <Image source={avatar} />
            <Text style={styles.avatarPrompt}>Add Profile Picture</Text>
        </View>
        <NameField />
        <GenderDropdown />
        <DateSelector />
        <CityStateSelector2 />
        <TouchableOpacity 
            style={[styles.buttonContainer, styles.shadowProps]}
            onPress={() => navigation.navigate("GradeAndSchool")}
            >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>


    </KeyboardAvoidingView>
  )
}

export default BuildProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }, 
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
        fontSize: 20 
      },
    imageContainer: {
        padding: 20
    },
    avatarPrompt: {
        marginTop: 5
    },
    buttonContainer:{
        width: '90%',
        backgroundColor: '#FE5244',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 50

    },
    buttonText: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        margin: 2
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    }
        

})