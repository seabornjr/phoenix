import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateSelector = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DOB, setDOB] = useState('Date of Birth');

  const sendToDatabase = () => {
    alert('current date is: ' + DOB);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDOB(date);
    console.warn("A date has been picked: ", DOB);
    hideDatePicker();
   //sendToDatabase();
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={DOB.toString()} onPress={showDatePicker} color="#000" />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    
 
  }
})

export default DateSelector;


