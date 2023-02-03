import { Card } from '@rneui/themed';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UserType = () => {
  const handleClick = () =>{
    return alert('Congrats!!! This is a functioning button.');
   }
     return (
     <View>
       <Text style={styles.heading}> YOU ARE A: </Text>
       <View style={styles.cardDiv}>
         <Card containerStyle={styles.cardContainer}>
             <Card.Title>Learner</Card.Title>
             <Text style={{ marginBottom: 10 }}>
               Looking for resources to upskill your career.
             </Text>
             <TouchableOpacity onPress={handleClick}>
               <Image alt="next-btn"
                 source={require('../assets/NextButtonArrow.png')}
                 style={{ marginLeft: "auto"}}>
               </Image>
             </TouchableOpacity>
         </Card> 
       </View>
       <Card containerStyle={[styles.cardContainer, styles.cardDiv]}>
             <Card.Title>Career Counselor</Card.Title>
             <Text style={{ marginBottom: 10, flexWrap:"wrap" }}>
               Guiding Learners to acheive their career goals.
             </Text>
             <TouchableOpacity onPress={handleClick}>
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
     heading: {
       justifyContent: 'center',
       textAlign: 'center',
       fontWeight: 'bold',
       marginBottom: 50,
       fontSize: 20 
     },
     cardContainer: {
       borderRadius:15,
       borderColor: "black",
       boxShadow: 20
     },
     cardDiv: {
       shadowColor: '#171717',
       shadowOffset: {width: -2, height: 4},
       shadowOpacity: 0.2,
       shadowRadius: 3,
     }
   });
   

export default UserType