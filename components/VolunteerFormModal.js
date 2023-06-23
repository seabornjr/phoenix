import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import VolunteerDateSelector from './VolunteerDateSelector';

const VolunteerFormModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const addVoluntterButton = require("../assets/addVolunteerButton.png")
    const [volDate, setVolDate] = useState("")
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [volCoordinatorEmail, setVolCoordinatorEmail] = useState("");

  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Volunteer Hours </Text>
            <Text style={styles.formText}>Select a Day </Text>
            <VolunteerDateSelector />
            <View style={styles.fromAndToContainer}>
                <View style={styles.fromAndToTitleContainer}>
                    <Text style={styles.formText}>From </Text>
                </View>
                <View style={styles.fromAndToTitleContainer}>
                    <Text style={styles.formText}>To </Text>
                </View>
            </View>
            <View style={styles.fromAndToFieldsContainer}>
                <View style={styles.container2}>
                    <TextInput
                        placeholder='Start Time'
                        value={startTime}
                        onChange={text => {
                        setStartTime(text)
                        }}
                        style= {styles.textInput}  
                    />
                </View>
                <View style={styles.container2}>
                    <TextInput
                        placeholder='End Time'
                        value={endTime}
                        onChange={text => setEndTime(text)}
                        style= {styles.textInput}  
                    />
                </View>
            </View>
            <Text style={styles.formText}>Volunteering Organization</Text>
            <View style={styles.container}>
                <TextInput
                        placeholder='Organization Name'
                        value={organizationName}
                        onChange={text => setOrganizationName(text)}
                        style= {styles.textInput} >
                </TextInput>
            </View>
            <Text style={styles.formText}>Coordinator Email Address</Text>
            <View style={styles.container}>
                <TextInput
                        placeholder='Coordinator Email'
                        value={volCoordinatorEmail}
                        onChange={text => setVolCoordinatorEmail(text)}
                        style= {styles.textInput} >
                        
                </TextInput>
            </View>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                setModalVisible(!modalVisible)
                alert(`Volunter work with ${organizationName} on ${volDate} from ${startTime} to ${endTime} is submitted. Volunteer POC is: ${volCoordinatorEmail}.`)
                }}>
                <Text style={styles.buttonTextCont}>Add</Text>
            </Pressable>
        </View>
      </View>
    </Modal>
      <Pressable
          style={[styles.buttonContainer, styles.shadowProps]}
          onPress={() => setModalVisible(true)}>
           <Image source={addVoluntterButton} />
      </Pressable>
  </View>
  )
}

export default VolunteerFormModal

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 50,
      },
      modalView: {
        margin: 19,
        backgroundColor: '#FFE2E0',
        borderRadius: 20,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 10,
        backgroundColor: '#FE5244',
        padding: 5,
        elevation:5,
        width: 350,
      },
      buttonOpen: {
        //what is this for?
        marginBottom: 50,
        
      },
      buttonClose: {
        backgroundColor: '#FE5244', 
        marginTop: 20
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',

      },
      shadowProps: {
        backgroundColor: 'black',
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    buttonContainer:{
        borderRadius: 10,
        padding: 10,

    },
    buttonTextCont: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        borderRadius: 10,
        padding: 5,
        margin: 2
    },
    formText: {      
        marginTop: 25,
        marginLeft: 15,
        alignSelf: 'flex-start',
        fontSize: 16  
    },
    fromAndToContainer: {
        width: 325,
        flexDirection: "row",
        textAlign: "left",
        justifyContent: "left"
    },
    fromAndToTitleContainer: {
        width: "50%",
    },
    fromAndToFieldsContainer: {
        flexDirection: "row",
        
    },
    textInput: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingTop: 10,
        backgroundColor: "white",
        borderRadius: 10,
        
    },
    container: {
        width: 325,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        marginTop: 10
    },
    container2: {
        width: "50%",
        height: 40,
        backgroundColor: "white",
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
    }
})