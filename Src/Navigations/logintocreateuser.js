import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from '../screens/Authentication/login';
import CreateUserScreen from '../screens/Authentication/createUser';

const Stack = createNativeStackNavigator();

const Logintocreateuser = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LogIn"
          component={LogInScreen}
        />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Logintocreateuser;
