import { Image, StyleSheet, Text, View } from "react-native";

const SudentDashboardCard = () => {

    const exampleUser = require("../assets/userAvatar1.png");

  return (
    <View style={styles.container}>
        <View style={styles.avatarContainer}>
            <Image source={exampleUser} style={{width: 60, height: 60}}/>
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
    container: {
        width: '90x%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        padding: 10,
        backgroundColor: '#F0F0F0',
    },
    studentText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    attributeTag: {
        width: '50%',
        height: 30,
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
    }


});