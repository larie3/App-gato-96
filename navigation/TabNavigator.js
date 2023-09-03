import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';
import More from '../screens/More';

const Tab = createBottomTabNavigator();

 const BottomTabNavigator = ()=> {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'home') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Create Post') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'More'){
              iconName = focused ? 'ellipsis-horizontal-circle' : 'ellipsis-horizontal-circle-outline'  
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FFD4DB',
          inactiveTintColor: '#ECE3F0',
        }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="Create Post" component={CreatePost} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    
  );
}

export default BottomTabNavigator 