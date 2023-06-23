import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const FormModal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={styles.modalText}>You have entered the following information: </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                navigation.navigate("GuardianInfo")
              }}>
              <Text style={styles.textStyle}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen, styles.shadowProps]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Continue</Text>
        </Pressable>
    </View>
  )
}

export default FormModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
      },
      modalView: {
        margin: 19,
        backgroundColor: 'white',
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
        padding: 15,
        elevation:5,
        width: 350,
      },
      buttonOpen: {
        //what is this for?
        marginBottom: 100,
        
      },
      buttonClose: {
        backgroundColor: '#000000', 
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
      },
      shadowProps: {
        shadowColor: '#00000',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    buttonContainer:{
        
        backgroundColor: '#FE5244',
        borderRadius: 10,

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
    }
    
})