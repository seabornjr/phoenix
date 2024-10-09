import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useCallback, useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import SubjectsList from './SubjectsList';

function SubjectsModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setModalVisible(prevState => !prevState);
  }, []);

  const handleCloseModal = useCallback(() => {
    Alert.alert('Modal has been closed.');
    toggleModal();
  }, [toggleModal]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SubjectsList />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={toggleModal}>
              <Text style={styles.textStyle}>Return to Dashboard</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.buttonOpen}
        onPress={toggleModal}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </Pressable>
    </View>
  );
}

export default React.memo(SubjectsModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    marginBottom: -40,
  },
  buttonClose: {
    backgroundColor: '#6750A4',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});