import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

const RaceEthnicityDropdown = () => {

    const [race, setRace] = useState("")
    const [is_hispanic, setIsHispanic] = useState("")

    const racialDemographics = [ "American Indian or Alaska Native", 'Asian',"Black or African American", "Native Hawaiian or Other Pacific Islander", "White", "Do not wish to diclose" ];
    const ethnicityOptions = ["Hispanic or Latino", "Not Hispanic or Latino"]
  return (
    <View>
    <SelectDropdown
            data={ethnicityOptions}
            onSelect={(selectedItem, index) => {
                setRace(selectedItem);
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
    <SelectDropdown
            data={racialDemographics}
            onSelect={(selectedItem, index) => {
                setRace(selectedItem);
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

export default RaceEthnicityDropdown

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: '90%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        marginTop: 50
      },
      dropdown1BtnTxtStyle: {color: '#444', textAlign: 'center'},
      dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 5},
      dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#000000'},
      dropdown1RowTxtStyle: {color: '#444', textAlign: 'center'},
})