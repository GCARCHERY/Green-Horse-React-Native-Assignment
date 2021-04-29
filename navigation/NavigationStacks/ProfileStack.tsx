import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileParamList } from "../../types";
import { HeaderConfig } from '../NavigationComponents/Header/Header';
import ProfileScreen from '../../screens/Profile/ProfileScreen/ProfileScreen';

const ProfileStack = createStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={HeaderConfig}
    >
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ 
            headerTitle: ''
         }}
      />
    </ProfileStack.Navigator>
  );
}