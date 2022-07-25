import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from '../screens/Authentication/login';
import CreateUserScreen from '../screens/Authentication/createUser';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Account from '../screens/Home/Account';
import Activity from '../screens/Home/Activity';
import Reels from '../screens/Home/Reels';
import SearchNavigation from './ScreenNavigation';
import ProfileButtons from '../screens/Home/ProfileButtons';
import EditProfile from '../screens/Home/EditProfile';
import Status from '../components/Status';
import AddStory from '../screens/Home/AddToStory'; 

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

const Tab = createBottomTabNavigator();

const BottomTabs= () => {
  return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon color="#000" size={20} name="home" />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon color="#000" size={20} name="search" />;
            },
          }}
          name="Search"
          component={SearchNavigation}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon color="#000" size={20} name="play-circle" />;
            },
          }}
          name="Reels"
          component={Reels}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon color="#000" size={20} name="heart" />;
            },
          }}
          name="Activity"
          component={Activity}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon color="#000" size={20} name="person-circle" />;
            },
          }}
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
  );
};



const HomeScreen=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BottomTabs' options={{headerShown: false}} component={BottomTabs}/>
        <Stack.Screen name='ProfileButtons' options={{headerShown: false}} component={ProfileButtons}/>
        <Stack.Screen name='Status' component={Status}/>
        <Stack.Screen name='EditProfile' options={{headerShown: false}} component={EditProfile}/>
        <Stack.Screen name='AddStory' component={AddStory}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export {Logintocreateuser, HomeScreen};
