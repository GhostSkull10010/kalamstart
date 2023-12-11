import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login'
import Signup from './Signup'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Authantication = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} 
      options={{
        tabBarIcon:({color,size}) =>
        {
            <Ionicons name="log-in" color="#c596d9" size={size}  />
        }
      }} />
      <Tab.Screen name="Signup" component={Signup}
      options={{
        tabBarIcon:({color,size}) =>
        {
            <Ionicons name="person" color="#c596d9" size={size}  />
        }
      }} />
    </Tab.Navigator>
  ) 
}

export default Authantication

const styles = StyleSheet.create({
    tabBarIcon:
    {
        color:'#f2d027'
    }
})