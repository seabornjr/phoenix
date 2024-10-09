import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const VolunteerDateSelector = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob,setDob] = useState('Date');

  const sendToDatabase = () => {
    alert('current date is: ' + dob);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const stringifiedDate  = date.toString();
    const parsed = stringifiedDate.split(" ");
    console.log(`Formatted date: ${parsed[1]} ${parsed[2]}, ${parsed[3]}`)
    const formattedDate = `${parsed[1]} ${parsed[2]}, ${parsed[3]}`
    hideDatePicker();
    
   return setDob(formattedDate);
    console.warn("A date has been picked: ", dob);
  
  };
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Button title={dob.toString()} onPress={showDatePicker} color="#000" />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    </View>
  )
}

export default VolunteerDateSelector

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        width: 350,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
    buttonContainer: {
        width: 325,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    }
})