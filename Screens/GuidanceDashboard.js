
import React from 'react';
import { View } from 'react-native';
import TableExample from '../components/AcademicsTable';
import GuidanceDashboardStudentTabs from '../components/GuidanceDashboardStudentTabs';
import SudentDashboardCard from '../components/SudentDashboardCard';

const GuidanceDashboard = () => {
  
  return (
    <View>
    
     <SudentDashboardCard />
     <GuidanceDashboardStudentTabs />
     <TableExample />
     
      
   
    </View>
  )
}

export default GuidanceDashboard