import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'



//user menu to navigagte to home, portfolio, and chatservice
const UserMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuButtons}>
        <TouchableOpacity style={styles.menuButton}
          onPress={()=>{navigation.navigate('FocusedUser1HomeScreen')}} >
          <FontAwesomeIcon icon={faHouse}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}
          onPress={()=>{navigation.navigate('PortfolioScreen')}} >
          <FontAwesomeIcon icon={faBriefcase}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} >
          <FontAwesomeIcon icon={faMessage}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserMenu

const styles = StyleSheet.create({
    container: {
        flex: .4,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        width: "100%",
        
    },
    textStyle: {
        textAlign: 'center',
        padding:2 ,
        fontSize: 20
    },
    menuButtons: {
      flexDirection: 'row',
    },
    menuButton: {
      padding: 30
    }
})