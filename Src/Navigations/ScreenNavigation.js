import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../screens/Home/Search';
import SearchScreen from '../screens/Home/SearchScreen';

const Stack = createNativeStackNavigator();
const SearchNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="S"
        component={Search}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
