import { View, Text } from 'react-native'
import React, {useContext} from 'react'


const UserContext = () => {
    const user = useContext(UserContext)

    

  return (
    <UserContext.Provider value="dark">
        
    </UserContext.Provider>
    );
  
}

export default UserContext
