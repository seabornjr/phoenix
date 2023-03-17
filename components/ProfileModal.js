import { Modal, StyleSheet, Text, View } from 'react-native'
import React, {useState, Pressable} from 'react'

const ProfileModal = () => {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
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
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
 container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 300,
    backgroundColor: '#f7beba',
    borderRadius: 10,
    marginTop: 20
 }
})