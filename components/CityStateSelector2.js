import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';

const CityStateSelector2 = () => {

    const [city, setCity] = useState("")  
    const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'APO' ];
  
    return (
    <View style={styles.optionsRow}>
        <View style={styles.container}>
        <TextInput
            placeholder='City'
            value={city}
            onChange={text => setCity(text)}
            style= {styles.textInput}
           
        />
        </View>
        <SelectDropdown
            data={states}
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

const styles = StyleSheet.create({
    optionsRow: {
        flexDirection: 'row', 
        width: '90%', 
        paddingTop: 10
    },
    container: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        justifyContent: 'center',
        marginRight: 5
       
    },
    textInput: {
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
        
    },
    dropdown1BtnStyle: {
        flex: .4,
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

export default CityStateSelector2
