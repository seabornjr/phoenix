import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const PortfolioOptions = () => {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.optionButton}>      
                <Text style={styles.optionText}>Leaderboard    </Text>            
                <FontAwesomeIcon icon={faArrowCircleRight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>      
                <Text style={styles.optionText}>Add Academic Awards</Text>            
                <FontAwesomeIcon icon={faArrowCircleRight} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>      
                <Text style={styles.optionText}>Add Extracurriculars</Text>            
                <FontAwesomeIcon icon={faArrowCircleRight} />
        </TouchableOpacity>
    </View>
  )
}

export default PortfolioOptions

const styles = StyleSheet.create({
    container: {
       width: '100%',
       marginLeft: 80
    },
    optionButton: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20       
    },
    optionText: {
        paddingLeft: 10,
        paddingRight: 180
    },
})