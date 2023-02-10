import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IncomeDropdown from '../components/IncomeDropdown'

const BackgroundIncome = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>What is your annual household income? </Text>
        <IncomeDropdown />
        <TouchableOpacity 
                style={[styles.buttonContainer, styles.shadowProps]}
                onPress={() => navigation.navigate("BackgroundFirstGen")}
                >
                <Text style={styles.buttonTextCont}>Continue</Text>
        </TouchableOpacity>
    


    </View>
  )
}

export default BackgroundIncome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
        fontSize: 20,
        width: '80%'
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