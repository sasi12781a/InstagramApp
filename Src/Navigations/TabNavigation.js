import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen from '../components/Home/Screen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Top" component={Screen} />
      <Tab.Screen name="Users" component={Screen} />
      <Tab.Screen name="Audio" component={Screen} />
      <Tab.Screen name="Tags" component={Screen} />
      <Tab.Screen name="Places" component={Screen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
