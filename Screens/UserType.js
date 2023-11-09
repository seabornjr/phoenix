import { Card } from '@rneui/themed';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UserType = ({navigation}) => {
  const handleClickLearner = () =>{
    return navigation.navigate('ResourcesPreview');
   }

   const handleClickCounselor = () =>{
    return navigation.navigate('GuidanceDashboard');
   }

     return (
     <View style={styles.container}>
       <Text style={styles.heading}> YOU ARE A: </Text>
       
        <Card containerStyle={styles.cardDiv}>
             <Card.Title>College or Bootcamp Admissions</Card.Title>
             <Text style={{ marginBottom: 10 }}>
               Here to connect with prospective students
             </Text>
             <TouchableOpacity onPress={handleClickLearner}>
               <Image alt="next-btn"
                 source={require('../assets/NextButtonArrow.png')}
                 style={{ marginLeft: "auto"}}>
               </Image>
             </TouchableOpacity>
        </Card> 
       
       {/* <View style={styles.cardDiv}>
         <Card containerStyle={styles.cardContainer}>
             <Card.Title>Learner</Card.Title>
             <Text style={{ marginBottom: 10 }}>
               Looking for resources to upskill your career.
             </Text>
             <TouchableOpacity onPress={handleClickLearner}>
               <Image alt="next-btn"
                 source={require('../assets/NextButtonArrow.png')}
                 style={{ marginLeft: "auto"}}>
               </Image>
             </TouchableOpacity>
         </Card> 
       </View> */}
        <Card containerStyle={[styles.cardDiv]}>
             <Card.Title>Learner</Card.Title>
             <Text style={{ marginBottom: 10 }}>
               Looking for resources to upskill your career.
             </Text>
             <TouchableOpacity onPress={handleClickLearner}>
               <Image alt="next-btn"
                 source={require('../assets/NextButtonArrow.png')}
                 style={{ marginLeft: "auto"}}>
               </Image>
             </TouchableOpacity>
        </Card> 
       
        <Card containerStyle={[styles.cardDiv]}>
             <Card.Title>Career Counselor</Card.Title>
             <Text style={{ marginBottom:10, flexWrap:"wrap" }}>
               Guiding Learners to acheive their career goals.
             </Text>
             <TouchableOpacity onPress={handleClickCounselor}>
               <Image alt="next-btn" 
                 source={require('../assets/PurpleNextButtonArrow.png')} 
                 style={{marginLeft: "auto"}}>
               </Image>
             </TouchableOpacity>
        </Card>
     </View>
     );
   };
   
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-evenly",
      marginBottom: 20,
      backgroundColor: 'white',
    },
     heading: {
       justifyContent: 'space-evenly',
       textAlign: 'center',
       fontWeight: 'bold',
       marginBottom: 15,
       fontSize: 20 
     },
     cardContainer: {
         
     },
     cardDiv: {
       borderRadius: 15,
       borderColor: "black",
       shadowColor: '#171717',
       shadowOffset: {width: -2, height: 4},
       shadowOpacity: 0.8,
       shadowRadius: 3,
       backfaceVisibility: 'hidden',
       backgroundColor: 'white',
     }
   });
   

export default UserType