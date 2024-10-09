import { Tab } from "@rneui/base";
import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
const GuidanceDashboardStudentTabs = () => {

    const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
        <Tab  titleStyle={{fontSize: 16}} value={index} onChange={setIndex} dense >
            <Tab.Item>Academics</Tab.Item>
            <Tab.Item>Extracurricular</Tab.Item>
            <Tab.Item>Interests</Tab.Item>
        </Tab>
    </View>
  )
}

export default GuidanceDashboardStudentTabs

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

