import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import CityStateSelector2 from '../components/CityStateSelector2'
import DateSelector from '../components/DateSelector'
import FormModal from '../components/FormModal'
import GenderDropdown from '../components/GenderDropdown'
import NameField from '../components/NameField'
import ProfileModal from '../components/ProfileModal'
import UploadImage from '../components/UploadImage'



const BuildProfile = ({navigation}) => {
    
    const [avatar, setAvatar] = useState(require('../assets/DefaultAvatar.png'));
   
    // function handleContinue() {
    //     alert("continue button clicked");
    // }
    
    
  return (
    <KeyboardAvoidingView
         style={styles.container}
        behavior="padding"
    >   
        <Text style={styles.heading}> Build Your Profile </Text>
        <View style={styles.imageContainer}>
            <UploadImage />
        </View>
        <NameField />
        <GenderDropdown />
        <DateSelector />
        <CityStateSelector2 />
        
       <FormModal navigation={navigation}/>
       
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
        marginBottom: 40,
        marginTop: 15,
        fontSize: 20 
      },
    imageContainer: {
        padding: 15,
        alignItems: 'center',
    },
    avatarPrompt: {
        marginTop: 5
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    }
        

})