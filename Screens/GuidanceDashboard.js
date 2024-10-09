
import React from 'react';
import { Text, View } from 'react-native';
import AcademicListData from '../components/AcademicListData';
import SudentDashboardCard from '../components/SudentDashboardCard';

const GuidanceDashboard = () => {
  
  return (
    <View>
     <Text >Sup</Text>
     <SudentDashboardCard />
     {/* <AcadmicsTable /> */}
     <AcademicListData />
      
   
    </View>
  )
}

export default GuidanceDashboard