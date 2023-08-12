import React, { useContext, useState } from 'react';


const UserContext = () => {
    const user = useContext({
      learner_id: useState(null),
      first_name: useState('Joe'),
      last_name: useState('Smith'),
      gender: useState('Not yet determined'),
      date_of_birth: useState('MM-DD-YYYY'),
      city: useState('pick a city'),
      state_abbrv: useState('select a state'),
      grade: useState('pick a grade'),
      school: useState('Select a school'),
      first_gen: useState('true or false'),
      is_hispanic: useState('true or false'),
      racial_id: useState('racial background not deifined'),
      income: useState('income not defined'),
      knows_profession: useState('should be true or false'),
      profession: useState('profession not defined'),
      company: useState('company not defined'),
      knows_field: useState('field not defined'),
    }) 

  return (
    <UserContext.Provider userObject={user}>
        
    </UserContext.Provider>
    );
  
}

export default UserContext
