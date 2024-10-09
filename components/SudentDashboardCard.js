import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const SudentDashboardCard = () => {

  return (
    <View style={[styles.container, styles.shadowProps]}>       
                <View style={styles.avatarContainer}>
                   <Avatar.Image size={86} source={ require("../assets/userAvatar1.png")}/>
                </View>
            <View >
                <Text style={styles.studentText}>Jordan</Text>
                <Text style={styles.studentText}>11th Grade</Text>
            </View>
            <View style={styles.attributeTag}>
                <Text style={styles.attributeText}>First Generation</Text>
            </View>
            <View style={styles.attributeTag}>
                <Text style={styles.attributeText}>African-American</Text>
            </View>
            
    </View>
  )
}

export default SudentDashboardCard

const styles = StyleSheet.create({
    table: { 
        padding: 15, 
      }, 
    container: {
        width: '90%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        padding: 10,
        backgroundColor: '#F0F0F0',
    },
    studentText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 3,

    },
    attributeTag: {
        width: '50%',
        height: 40,
        position: 'flex',
        backgroundColor: '#6750A4',
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#C4C4C4',
    },
    attributeText: {
        color: 'white',
        padding: 5,
        textAlign: 'center',
        fontSize: 16,
    },
    shadowProps: {  
        shadowOffset: {width: -2, height: 4},
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3
    }


});