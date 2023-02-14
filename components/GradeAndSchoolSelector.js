import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'


const GradeAndSchoolSelector = () => {

    const grades = [6,7,8,9,10,11,12];
    const [schools, setSchools] = useState(['Greensville Co. HS', 'Borownville HS', 'St. Blue Prep'])

  return (
    <View style={styles.optionsRow}>
      <SelectDropdown
            data={grades}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            defaultButtonText={'Current Grade'}
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
        <SelectDropdown
            data={schools}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            defaultButtonText={'School Name'}
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

export default GradeAndSchoolSelector

const styles = StyleSheet.create({
    optionsRow: {
        flexDirection: 'column', 
         
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    container: {
        flex: 1,
        height: 50,
        
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        justifyContent: 'center' ,
        marginRight: 5
       
    },
    textInput: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
        
    },
    dropdown1BtnStyle: {
        marginTop: 10,
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