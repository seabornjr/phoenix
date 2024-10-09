
import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import SubjectsModal from './SubjectsModal';
  
const TableExample = () => { 
  return ( 
    <DataTable style={styles.container}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title>Grade</DataTable.Title> 
        <DataTable.Title>GPA</DataTable.Title> 
        <DataTable.Title>Subjects</DataTable.Title> 
      </DataTable.Header> 
      <DataTable.Row> 
        <DataTable.Cell>6th</DataTable.Cell> 
        <DataTable.Cell>3.8</DataTable.Cell> 
        <DataTable.Cell>Subjects List <SubjectsModal /></DataTable.Cell> 
      </DataTable.Row> 
  
      <DataTable.Row> 
        <DataTable.Cell>7th</DataTable.Cell> 
        <DataTable.Cell>3.7</DataTable.Cell> 
        <DataTable.Cell>Subjects List <SubjectsModal /></DataTable.Cell>
    </DataTable.Row>
      <DataTable.Row> 
        <DataTable.Cell>8th</DataTable.Cell> 
        <DataTable.Cell>3.9</DataTable.Cell> 
        <DataTable.Cell>Subjects List <SubjectsModal/></DataTable.Cell> 
        
      </DataTable.Row> 
      <DataTable.Row> 
        <DataTable.Cell>9th</DataTable.Cell> 
        <DataTable.Cell>4.0</DataTable.Cell> 
        <DataTable.Cell>Subjects List <SubjectsModal /></DataTable.Cell> 
  
      </DataTable.Row> 
    </DataTable> 
  ); 
}; 
  
export default TableExample; 
  
const styles = StyleSheet.create({ 
  container: { 
    padding: 5, 
  }, 
  tableHeader: { 
    backgroundColor: '#DCDCDC', 
  }, 
});

