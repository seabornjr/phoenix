import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ResourcePrevSlider from '../components/ResourcePrevSlider.js'

const ResourcesPreview = ({navigation}) => {
  return (
   <> 
       <ResourcePrevSlider />
       <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        title='Next'
        onPress={() => navigation.navigate('UserSelection')}
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
    bottom: 100,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white' 
  }
})

export default ResourcesPreview