import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { HomeParamList } from "../../types";
import SkillChallangeScreen from '../../screens/Home/SkillChallangeScreen/SkillChallangeScreen';
import { HeaderConfig } from '../NavigationComponents/Header/Header';

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={HeaderConfig}
    >
      <HomeStack.Screen
        name="SkillChallangeScreen"
        component={SkillChallangeScreen}
        options={{ 
            headerTitle: '',
        }}
      />
    </HomeStack.Navigator>
  );
}