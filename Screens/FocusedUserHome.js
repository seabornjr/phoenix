import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UserMenu from '../components/UserMenu'

const FocusedUserHome = ({navigation}) => {
    const user = 'Shelton'
  return (
    <View style={styles.container}>
        <View style={styles.greetingDiv}>
          <Text style={styles.greeting}>Hi {user}</Text>
        </View>
      <TouchableOpacity>
          <Image source={require('../assets/GoogleDAPreview.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardDiv1}>
          <Text style={styles.cardText1} onPress={()=> { Linking.openURL("https://medium.com/javarevisited/the-2020-data-analyst-roadmap-9a2d64d3bdfe")}}>Data Analyst Roadmap</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.cardDiv2}>
          <Text style={styles.cardText1} onPress={()=> { Linking.openURL("https://grow.google/certificates/data-analytics/?utm_source=google&utm_medium=paidsearch&utm_campaign=ha-sem-sitelink__geo--US&utm_term=google%20data%20analystics&gad=1&gclid=CjwKCAjw6vyiBhB_EiwAQJRopqUR7gDJqFPoTXLvBsHJWMBFtdJqEFjDZuHuesY5IVFXf2SQ1oeuzBoCrE8QAvD_BwE#?modal_active=none")}}>Courses Offered by Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardDiv3}>
          <Text style={styles.cardText1} onPress={()=> { Linking.openURL("https://www.edx.org/search?q=data+analysis&tab=course")}}>Data Analyst AP Courses</Text>
      </TouchableOpacity>
      <UserMenu navigation={navigation}/>
    </View>
  )
}

export default FocusedUserHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    greeting: {
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 50,
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    cardText1: {
        textAlign: 'left'
    },
    cardDiv1:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#f7beba',
        borderRadius: 10,
        marginTop: 20       
    },
    cardDiv2:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#E7E9FF',
        borderRadius: 10,
        marginTop: 20       
    },
    cardDiv3:{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#E4FFFA',
        borderRadius: 10,
        marginTop: 20       
    },
    shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    buttonContainer:{
        width: '90%',
        backgroundColor: '#FE5244',
        borderRadius: 10,
        marginTop: 150,
        marginBottom: 50

    },
    buttonTextCont: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        margin: 2
    }
})