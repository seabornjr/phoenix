import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ResourcePrevSlider from '../components/ResourcePrevSlider.js'

const ResourcesPreview = ({navigation}) => {
  return (
   <> 
       <ResourcePrevSlider />
      <View style={[styles.container]}>
      <TouchableOpacity 
        style={[styles.buttonContainer, styles.shadowProps]} 
        title='Next'
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
      
   </>
  )
}

const styles = new StyleSheet.create({
  button: {
    backgroundColor: '#FE5244',
    borderRadius: 10,
    height: 30,
    borderColor: 'black',
    width: '80%', 
  },
  container: {
    bottom: 150,
    alignItems: 'center',
    marginTop: 25,
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
    },
})

export default ResourcesPreview