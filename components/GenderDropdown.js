import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

const GenderDropdown = () => {

    const genders  = ['Male', 'Female', 'Non-Binary', 'Gender Non-Conforming', 'Agender/I do not identify', 'I do not wish to disclose', 'Not Listed']

  return (
  <View style={styles.container}>
        <SelectDropdown
            data={genders}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
                    return <FontAwesomeIcon icon={isOpened ? faCircleChevronUp : faCircleChevronDown} color={'#444'} size={18} />;
                    }}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
        />
    </View>

  )
}

export default GenderDropdown

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },
    dropdown1BtnStyle: {
        width: '90%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
      },
      dropdown1BtnTxtStyle: {color: '#444', textAlign: 'center'},
      dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 5},
      dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#000000'},
      dropdown1RowTxtStyle: {color: '#444', textAlign: 'center'},
})


//source for dropdown component code is: https://www.npmjs.com/package/react-native-select-dropdown