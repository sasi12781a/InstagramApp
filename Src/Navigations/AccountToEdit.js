import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../screens/Home/EditProfile';
import ProfileButtons from '../screens/Home/ProfileButtons';

const Stack = createNativeStackNavigator();

const EditNavigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='ProfileButtons' component={ProfileButtons}/>
            <Stack.Screen name='EditProfile' component={EditProfile}/>
        </Stack.Navigator>
    )
}
export default EditNavigation;